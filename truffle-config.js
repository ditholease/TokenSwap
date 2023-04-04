require('dotenv').config();
const path = require("path");

const HDWalletProvider = require('@truffle/hdwallet-provider');

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    ganache: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: 5777,       // Any network (default: none)
    },
    roxycoin: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc.roxycoin.be`),
      network_id: "*",
      gas: 5500000,
    },
  },
  compilers: {
    solc: {
      version: ">=0.6.0 <0.9.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
