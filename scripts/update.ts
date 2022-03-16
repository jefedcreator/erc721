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
  const deployedNFTAddr = "0xfAf266C97cC310bb3065965F6c7AF49A25f14Bc9";
  const deployedNFT = await ethers.getContractAt("MyToken", deployedNFTAddr);

  const update = await deployedNFT.changeTokenURI("ipfs://QmeEzTt6dNtYXi8xcoFz8RWwS4Bkpdky25ZYY5QfmDZqFP",2);
  await update.wait();
  }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
