const { expect } = require("chai");
const { ethers } = require("hardhat");
const config = require("../config.json");

describe("Aggregator", function () {
  let owner, aggregator;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();

    // Deploy the Aggregator contract
    const Aggregator = await ethers.getContractFactory("Aggregator");
    aggregator = await Aggregator.deploy(
      config.UNISWAP.V2_ROUTER_02_ADDRESS,
      config.SUSHISWAP.V2_ROUTER_02_ADDRESS
    );
    await aggregator.deployed();
  });

  describe("Deployment", function () {
    it("Sets the owner", async function () {
      expect(await aggregator.owner()).to.equal(await owner.getAddress());
    });

    it("Sets router A", async function () {
      expect(await aggregator.routerA()).to.equal(
        config.UNISWAP.V2_ROUTER_02_ADDRESS
      );
    });

    it("Sets router B", async function () {
      expect(await aggregator.routerB()).to.equal(
        config.SUSHISWAP.V2_ROUTER_02_ADDRESS
      );
    });
  });
});
