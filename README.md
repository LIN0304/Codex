# Codex Token on Holesky

This project contains a simple ERC20 token called **Codex** (`CDX`) and example code to deploy it to the Ethereum Holesky testnet using Hardhat. A minimal web page demonstrates how to read a connected user's balance via MetaMask.

## Directory Overview

- `contracts/` – Solidity smart contracts
- `scripts/` – Hardhat deployment script
- `frontend/` – Example HTML, CSS and JavaScript frontend
- `hardhat.config.js` – Hardhat configuration
- `package.json` – Node dependencies (Hardhat, ethers, OpenZeppelin)

## Setup

1. Install Node.js (v18+ recommended).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in `HOLESKY_RPC_URL` and `PRIVATE_KEY` (or edit `hardhat.config.js` directly).
4. Compile contracts:
   ```bash
   npm run compile
   ```
5. Deploy to Holesky:
   ```bash
   npm run deploy
   ```
   The script prints the deployed token address.

## Frontend Usage

Open `frontend/index.html` in a browser with MetaMask installed. Enter the deployed token address in `app.js` (replace `0xYOUR_TOKEN_ADDRESS`) and refresh. Click **Connect Wallet** to see the connected account's CDX balance.

## Notes

- The provided configuration includes placeholders for RPC URL and private key. Never commit real private keys.
- Holesky is an Ethereum testnet; tokens deployed there have no real-world value.
