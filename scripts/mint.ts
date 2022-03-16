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
  const deployedNFTAddr = "0x250a86b82f3F50693cE74c65f88aCFd66317a659";
  const deployedNFT = await ethers.getContractAt("MyToken", deployedNFTAddr); 

  const eoa = "0xbf5FfE07d3DCCcb143EE3Fd9F38B1520a34fcB47";
  const mint = await deployedNFT.mintToken("ipfs://QmeEzTt6dNtYXi8xcoFz8RWwS4Bkpdky25ZYY5QfmDZqFP",eoa);
  await mint.wait();
  const mint2 = await deployedNFT.mintToken("ipfs://QmZkZUmuPT1ZHxXhpwCzaDUdhokgtdRbAPW5rrK4FySrFa",eoa);
  await mint2.wait();
  }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
