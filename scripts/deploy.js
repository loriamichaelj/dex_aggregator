const hre = require("hardhat");
const config = require("../config.json");

async function main() {
  // Deploy Aggregator
  const Aggregator = await hre.ethers.getContractFactory("Aggregator");
  const aggregator = await Aggregator.deploy(
    config.UNISWAP.V2_ROUTER_02_ADDRESS,
    config.SUSHISWAP.V2_ROUTER_02_ADDRESS
  );
  await aggregator.deployed();
  console.log(`Aggregator contract deployed to: ${aggregator.address}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
