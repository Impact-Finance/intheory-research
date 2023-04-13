// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ResearchProjectFactory is Ownable {
    address[] private deployedProjects;


    event ResearchProjectCreated(
        uint256 indexed index,
        address indexed projectAddress
    );

    // Deploy a ResearchProject contract -> requires a minimum contribution amount, researcher address, contract address of stablecoin used for payment, and fee percentage
    function createResearchProject(
        uint128 minimum,
        address payable researcher,
        address stablecoinContract,
        bool  stablecoinPermitEnabled,
        uint32 feePercentage
    ) external onlyOwner {
        address newProject = address(new ResearchProject(
            minimum,
            researcher,
            stablecoinContract,
            stablecoinPermitEnabled,
            feePercentage,
            payable(msg.sender)
        ));
        deployedProjects.push(newProject);
        emit ResearchProjectCreated(deployedProjects.length - 1, newProject);
    }

    function getDeployedProjects() external view returns (address[] memory) {
        return deployedProjects;
    }
}

contract ResearchProject is ERC721, ERC721URIStorage, ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint32 private _feePercentage; 
    uint128 private _minimumContribution; 
    uint private _unclaimedFees; 
    uint private _unclaimedContributions; 

    address payable private _researcher; 
    address payable private _paymentFeeReceiver; 

    address private _stable; 
    bool private _stablePermitEnabled;

    address[] private _allContributors; 

    bytes32 public DOMAIN_SEPARATOR;
    bytes32 public constant DOMAIN_TYPEHASH = keccak256("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)");
    event ContributionReceived(address indexed contributor, uint amount, uint tokenId);

    constructor(
        uint128 minimumContribution,
        address payable researcher,
        address stablecoinContract,
        bool stablecoinPermitEnabled,
        uint32 feePercentage,
        address payable paymentFeeReceiver
    ) ERC721("inTheory Research NFT", "THEORY") {
        _stable = stablecoinContract;
        _stablePermitEnabled = stablecoinPermitEnabled;
        _minimumContribution = minimumContribution;
        _feePercentage = feePercentage;
        _researcher = researcher;
        _paymentFeeReceiver = paymentFeeReceiver;

        uint256 ch;
        assembly {
            ch := chainid()
        }
        DOMAIN_SEPARATOR = keccak256(abi.encode(
            DOMAIN_TYPEHASH,
            keccak256(bytes("inTheory Research NFT")),
            keccak256(bytes("1")),
            ch,
            address(this)
        ));
        super.transferOwnership(paymentFeeReceiver);
    }

    // Accepts a contribution and mints an ERC721 to the sender with the metadata located at tokenMetaURI
    function contribute(uint amount, string calldata tokenMetaURI) external returns(uint) {
        require(amount >= _minimumContribution, "Contribution is below the required minimum.");
        uint allowance = IERC20(_stable).allowance(msg.sender, address(this));
        require(allowance >= amount, "Check token allowance.");
        IERC20(_stable).transferFrom(msg.sender, address(this), amount);
        uint newTokenId = _tokenIds.current();
        uint feeAmount = amount * _feePercentage / 100;

        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenMetaURI);

        _unclaimedFees = _unclaimedFees + feeAmount;
        _unclaimedContributions = _unclaimedContributions + (amount - feeAmount);

        _allContributors.push(msg.sender);
        _tokenIds.increment();

        emit ContributionReceived(msg.sender, amount, newTokenId);
        return newTokenId;
    }

    function contributeWithPermit(
        uint amount, string calldata tokenMetaURI,
        uint8 v, bytes32 r, bytes32 s, uint256 deadline
    ) external returns(uint) {
        require(amount >= _minimumContribution, "Contribution is below the required minimum.");
        IERC20Permit(_stable).permit(msg.sender, address(this), amount, deadline, v, r, s);
        IERC20(_stable).transferFrom(msg.sender, address(this), amount);
        uint newTokenId = _tokenIds.current();
        uint feeAmount = amount * _feePercentage / 100;

        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenMetaURI);

        _unclaimedFees = _unclaimedFees + feeAmount;
        _unclaimedContributions = _unclaimedContributions + (amount - feeAmount);

        _allContributors.push(msg.sender);
        _tokenIds.increment();

        emit ContributionReceived(msg.sender, amount, newTokenId);
        return newTokenId;

    }

    function getAllContributors() external view returns(address[] memory) {
        return _allContributors;
    }

    function disburseFunds() external onlyOwner {
        require(_unclaimedContributions > 0, "No contributions to claim.");
        require(IERC20(_stable).balanceOf(address(this)) >= _unclaimedContributions, "Insufficient balance in contract.");
        IERC20(_stable).transfer(_researcher, _unclaimedContributions);
        delete _unclaimedContributions; // gas-efficient way to reinitialize variable
    }

    function getUnclaimedContributionsAmount() external view returns(uint) {
        return _unclaimedContributions;
    }

    function claimFees() external onlyOwner {
        require(_unclaimedFees > 0, "No fees to claim.");
        require(IERC20(_stable).balanceOf(address(this)) >= _unclaimedFees, "Insufficient balance in contract.");
        IERC20(_stable).transfer(_paymentFeeReceiver, _unclaimedFees);
        delete _unclaimedFees; // gas-efficient way to reinitialize variable
    }

    function getUnclaimedFeeAmount() external view returns(uint) {
        return _unclaimedFees;
    }

    // Used to empty entire balance of contract, takes boolean as input on whether to reset state variables for unclaimed funds/fees -> function for emergency use only
    function withdrawBalance(bool resetBalances) external onlyOwner {
        require(IERC20(_stable).balanceOf(address(this)) > 0);
        IERC20(_stable).transfer(_paymentFeeReceiver, IERC20(_stable).balanceOf(address(this)));
        if(resetBalances){
            _unclaimedFees = 0;
            _unclaimedContributions = 0;
        }
    }

    // The following functions are all getters and setters for state variables
    function getFeePercentage() external view returns(uint32) {
        return _feePercentage;
    }

    function changeFeePercentage(uint32 newFeePercentage) external onlyOwner {
        require(newFeePercentage <= 100, "Fee percentage must be <= 100");
        _feePercentage = newFeePercentage;
    }

    function getMinimumContributionAmount() external view returns(uint128) {
        return _minimumContribution;
    }

    function changeMinimumContributionAmount(uint128 newContributionMinimum) external onlyOwner {
        _minimumContribution = newContributionMinimum;
    }

    function getStablecoinAddress() external view returns(address) {
        return _stable;
    }

    function changeStablecoinAddress(address newContractAddress, bool isPermitEnabled) external onlyOwner {
        _stablePermitEnabled = isPermitEnabled;
        _stable = newContractAddress;
    }

    function getCurrentResearcher() external view returns(address) {
        return _researcher;
    }

    function changeResearcher(address payable newResearcher) external onlyOwner {
        _researcher = newResearcher;
    }

    function getFeeCollector() external view returns(address) {
        return _paymentFeeReceiver;
    }

    function changeFeeCollector(address payable newFeeCollector) external onlyOwner {
        _paymentFeeReceiver = newFeeCollector;
    }

    // The following functions are overrides required by Solidity
    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}