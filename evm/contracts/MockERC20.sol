// SPDX-License-Identifier: MIT

// For testing only, not deployed when running `truffle migrate`
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockERC20 is ERC20 {
    constructor() ERC20("Stable", "MOCK") {
        _mint(msg.sender, 1000000000);
    }
}