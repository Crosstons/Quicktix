const hre = require("hardhat");
const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  const factory = await ethers.getContractFactory("Factory");
  const Factory = await factory.deploy();
  console.log("Factory Contract Deployed!");
  console.log(`Factory Contract Address:  ${Factory.target} `);

  fs.writeFileSync("contract-address.txt", Factory.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
