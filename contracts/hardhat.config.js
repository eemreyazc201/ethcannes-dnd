require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {

  solidity: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },

  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./src",
  },

  namedAccounts: {
    // By default, it will take the first Hardhat account as the deployer  
    deployer: {
      default: 0
    }
  },

  networks: {
    ethereum: {
      chainId: +process.env.ETH_CHAIN_ID,
      url: process.env.ETH_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
    ronin: {
      chainId: +process.env.RONIN_CHAIN_ID,
      url: process.env.RONIN_RPC,
      accounts: [process.env.PRIVATE_KEY],
    }
  }
  
};