const { expect } = require("chai");
const { ethers } = require("hardhat");
const config = require("../config.json");

describe("Aggregator", () => {
  describe("Deployment", () => {
    it("has correct name", async () => {
      const Aggregator = await ethers.getContractFactory("Aggregator");
      let aggregator = await Aggregator.deploy();
      expect(await aggregator.name()).to.eq("Aggregator");
    });
  });
});
