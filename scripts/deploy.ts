import { ethers } from "hardhat";

async function main() {
  const Lock = await ethers.getContractFactory("Storage");
  const lock = await Lock.deploy();

  await lock.deployed();

  console.log(
    `Storage deployed to ${lock.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
