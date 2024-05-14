const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = () => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Aggregator", () => {
  describe("Deployment", () => {
    it("has correct name", async () => {
      const Aggregator = await ethers.getContractFactory("Aggregator");
      let aggregator = await Aggregator.deploy();
      expect(await aggregator.name()).to.eq("Aggregator");
    });
  });
});
