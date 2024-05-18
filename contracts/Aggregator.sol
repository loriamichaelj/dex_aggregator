// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";

// [] Connect DEXes
// [] Facilitate Swaps

contract Aggregator {
    IUniswapV2Router02 public immutable routerA;
    IUniswapV2Router02 public immutable routerB;
    address public owner;

    constructor(address _routerA, address _routerB) {
        routerA = IUniswapV2Router02(_routerA); // Uniswap
        routerB = IUniswapV2Router02(_routerB); //
    }

    function _swapOnDexA(
        address[] memory _path,
        uint256 _amountIn,
        uint256 _amountOut
    ) internal {}

    function _swapOnDexB(
        address[] memory _path,
        uint256 _amountIn,
        uint256 _amountOut
    ) internal {}
}
