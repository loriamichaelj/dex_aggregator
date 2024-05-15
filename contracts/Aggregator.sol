// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";

// [] Connect DEXes
// [] Facilitate Swaps

contract Aggregator {
    string public name = "Aggregator";

    constructor(address _routerA, address _routerB) {}
}
