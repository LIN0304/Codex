const { ethers } = require("hardhat");

async function main() {
  const initialSupply = ethers.utils.parseUnits("1000000", 18); // 1 million tokens
  const Token = await ethers.getContractFactory("CodexToken");
  const token = await Token.deploy(initialSupply);
  await token.deployed();
  console.log("CodexToken deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
