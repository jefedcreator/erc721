// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const NFT = await ethers.getContractFactory("MyToken");
  const deployNFT = await NFT.deploy();
  const deployedNFT = await deployNFT.deployed();
  
  const eoa = "0xbf5FfE07d3DCCcb143EE3Fd9F38B1520a34fcB47";

  const mint = await deployedNFT.mintToken("ipfs://Qmb6KjNTERztvSdYptkQFWku1qU6SvfF3WKyfjvHPHfRht",eoa);
  await mint.wait();
  const mint2 = await deployedNFT.mintToken("ipfs://QmVstF5ApYD5foRmF3eBuT3tjqypwSZnRUsBY6aQw5o3EY",eoa);
  await mint2.wait();
  

 console.log("NFT deployed to:", deployNFT.address);

 console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(100000);

  // Verify the contract after deploying
  //@ts-ignore
  await hre.run("verify:verify", {
    address: deployedNFT.address,
    constructorArguments: [],
  });

}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
