require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.21",
  },
  networks: {
    "lightlink-mainnet": {
      url: "https://replicator.phoenix.lightlink.io/rpc/v1",
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 1000000000,
    },
    "lightlink-testnet": {
      url: "https://replicator.pegasus.lightlink.io/rpc/v1",
      accounts: [process.env.PRIVATE_KEY],
    },
    "base-local": {
      url: "http://localhost:8545",
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 1000000000,
    },
  },
};
