const { assert } = require("chai");
const { network, deployments, ethers } = require("hardhat");
const { developmentChains } = require("../../helper-hardhat-config");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Optimized NFT Unit Tests", function () {
      let nftOptimized, deployer;

      beforeEach(async () => {
        accounts = await ethers.getSigners();
        deployer = accounts[0];
        nftOptimized = await ethers.getContract("NftOptimized");
      });

      it("Allows users to mint an NFT, and updates appropriately", async function () {
        const txResponse = await nftOptimized.mintNft();
        await txResponse.wait(1);
        const tokenURI = await nftOptimized.tokenURI(0);
        console.log(tokenURI);
        // const tokenCounter = await nftOptimized.getTokenCounter();

        // assert.equal(tokenCounter.toString(), "1");
        // assert.equal(tokenURI, await nftOptimized.TOKEN_URI());
      });
    });
