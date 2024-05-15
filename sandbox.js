const { ethers, upgrades, network } = require("hardhat");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const main = async () => {
  const provider = ethers.provider;

  const currentBlock = await provider.getBlockNumber();
  console.log(`Current Block: ${currentBlock}`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
