require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = ""; // Make sure to fill this with your actual private key

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

