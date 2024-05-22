// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const config = require("../config.json");

async function main() {
  // Deploy Aggregator
  const aggregator = await hre.ethers.getContractFactory("Aggregator", [
    config.UNISWAP.V2_ROUTER_02_ADDRESS,
    config.SUSHISWAP.V2_ROUTER_02_ADDRESS,
  ]);
  await aggregator.waitForDeployment();
  console.log(
    `Aggregator contract deployed to: ${await aggregator.getAddress()}\n`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
