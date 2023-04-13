// SPDX-License-Identifier: MIT

// For testing only, not deployed when running `truffle migrate`
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";

contract MockERC20Permit is ERC20Permit {
    constructor() ERC20Permit("Stable") ERC20("test", "TST") {
        _mint(msg.sender, 1000000000);
    }
}