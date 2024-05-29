// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol"; // Importing ERC20 interface

// [] connect dex
// [] compare price between tokens pairs base on pool
// [] facilitate swaps

contract Aggregator {
    IUniswapV2Router02 public immutable routerA;
    IUniswapV2Router02 public immutable routerB;
    address public owner;

    constructor(address _routerA, address _routerB) {
        routerA = IUniswapV2Router02(_routerA); // Uniswap
        routerB = IUniswapV2Router02(_routerB); // Sushiswap
        owner = msg.sender;
    }

    function comparePrice() external {}

    function swapOnDexA() external {}

    function swapOnDexB() external {}
}
