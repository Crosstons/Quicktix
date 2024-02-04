const fs = require("fs");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function updateContractAddress() {
  try {
    const { stdout, stderr } = await exec("npx hardhat run contract/scripts/deploy.js --network <selected_network>");

    if (stderr) {
      console.error(`Error during contract deployment: ${stderr}`);
      process.exit(1);
    }

    const contractAddress = stdout.trim();
    console.log(`Updating REACT_APP_CONTRACT_ADDRESS in .env: ${contractAddress}`);

    const envFilePath = ".env";
    const envContent = fs.readFileSync(envFilePath, "utf-8");
    const updatedEnvContent = envContent.replace(/REACT_APP_CONTRACT_ADDRESS=.*/, `REACT_APP_CONTRACT_ADDRESS=${contractAddress}`);
    fs.writeFileSync(envFilePath, updatedEnvContent);

    console.log("Environment variable updated successfully.");
  } catch (error) {
    console.error(`Error updating contract address: ${error.message}`);
    process.exit(1);
  }
}

updateContractAddress();
