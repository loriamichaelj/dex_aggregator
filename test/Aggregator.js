const { expect } = require("chai");
const { ethers } = require("hardhat");
const config = require("../config.json");

describe("Aggregator", () => {
  let owner;
  let aggregator;

  beforeEach(async () => {
    [owner] = await ethers.getSigners();

    const Aggregator = await ethers.getContractFactory("Aggregator");

    aggregator = await Aggregator.deploy(
      config.UNISWAP.V2_ROUTER_02_ADDRESS,
      config.SUSHISWAP.V2_ROUTER_02_ADDRESS
    );
    await aggregator.deployed();
  });

  describe("Deployment", () => {
    it("Sets the owner", async () => {
      expect(await aggregator.owner()).to.equal(await owner.getAddress());
    });
    it("Sets router A", async () => {
      expect(await aggregator.routerA()).to.equal(
        config.UNISWAP.V2_ROUTER_02_ADDRESS
      );
    });
  });
});
