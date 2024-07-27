const hre = require("hardhat");

async function main() {
  // Combining elements from both branches
  const contract = await hre.ethers.deployContract("Swisstronik", ["Hello Swisstronik!!"]);
  // Alternatively, if you want to use the "TestToken" deployment
  // const contract = await hre.ethers.deployContract("TestToken");

  await contract.waitForDeployment();

  console.log(`Swisstronik contract deployed to ${contract.target}`);
  // Alternatively, if using "TestToken"
  // console.log(`TestToken deployed to ${contract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

