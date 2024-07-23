# Polygon-Advanced-Module-1 Project

Welcome to the first project in Polygon-Advanced! In this project, you will deploy an NFT collection on the Ethereum blockchain, map the collection to Polygon, and transfer assets via the Polygon Bridge.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Executing Program](#executing-program)
3. [Deploying the ERC721 Contract](#deploying-the-erc721-contract)
4. [Batch Mint NFTs](#batch-mint-nfts)
5. [Approve and Deposit NFTs to Polygon Mumbai](#approve-and-deposit-nfts-to-polygon-amoy)
6. [Author](#author)
7. [License](#license)

## Getting Started

To get started with this project, follow the instructions below:

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the Poly_Proof project directory:
   ```bash
   cd Poly_Proof
   ```

## Executing Program

1. Install the necessary dependencies by running:
   ```bash
   npm install
   ```

2. Run the test file to ensure everything is set up correctly:
   ```bash
   npx hardhat test
   ```

## Deploying the ERC721 Contract

1. Rename the `.env.example` file to `.env` and provide your wallet private key where required:
   ```plaintext
   PRIVATE_KEY= 'your wallet private key'
   ```

2. Deploy the ERC721 contract to the Sepolia Ethereum Testnet by running:
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

3. After deploying, copy the generated contract address into `contractAddress.js` (stored in the `metadata` folder) and `batchMint.js` (stored in the `scripts` folder).

## Batch Mint NFTs

1. Batch-mint NFTs using the deployed ERC721 contract by running:
   ```bash
   npx hardhat run scripts/batchMint.js --network sepolia
   ```

2. The script will mint the specified number of NFTs and assign them to your address.

## Approve and Deposit NFTs to Polygon Amoy

1. Approve and deposit the minted NFTs from Ethereum to the Polygon Mumbai network using the FxPortal Bridge by running:
   ```bash
   npx hardhat run scripts/approveDeposit.js --network Sepolia
   ```

## Author

Kankatala Hemanth 

## License

This project is licensed under the MIT License. You can make a copy of the project to use for your own purposes.
