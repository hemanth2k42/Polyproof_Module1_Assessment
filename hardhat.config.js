/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.18",
};
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://rpc2.sepolia.org/",
      accounts: [process.env.PRIVATE_KEY],
    },
    amoy: {
      url: "https://rpc-amoy.polygon.technology/ ",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
