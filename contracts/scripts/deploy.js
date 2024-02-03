const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
  const factory = await ethers.getContractFactory("Factory");
  const Factory = await factory.deploy();
  console.log("Factory Contract Deployed!");
  console.log(`Factory Contract Address:  ${Factory.target} `);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
