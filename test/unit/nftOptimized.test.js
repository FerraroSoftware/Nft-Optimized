const { assert } = require("chai");
const { network, deployments, ethers } = require("hardhat");
const { developmentChains } = require("../../helper-hardhat-config");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Optimized NFT Unit Tests", function () {
      let basicNft, deployer;

      beforeEach(async () => {
        accounts = await ethers.getSigners();
        deployer = accounts[0];
        //   await deployments.fixture(["mocks", "basicnft"]);
        basicNft = await ethers.getContract("NftOptimized");
      });

      it("Allows users to mint an NFT, and updates appropriately", async function () {});
    });
