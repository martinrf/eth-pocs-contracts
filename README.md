# suitesports-contracts
Solidity Contracts

## Installation

You need to have node gyp configured to the project to work.

- https://github.com/nodejs/node-gyp

      npm install
      npm run test      

To Compile Inbox Contract

    node compile.js

To Deploy Inbox Contract

    node deploy.js
    
To Compile Lottery Contract

    node compile-lottery.js
    
    ABI: 
    [
      {
        "type": "function",
        "name": "manager",
        "constant": true,
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "pickWinner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getPlayers",
        "outputs": [
          {
            "name": "",
            "type": "address[]"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "enter",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "players",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      }
    ]
    
To Deploy Lottery Contract

    node deploy-lottery.js
    
#### Deployed Contracts for testing in Rinkeby

- Inbox contract deployed to address

      0x1162004150CB8600C6B6281Fba3367819636871f

- Lottery contract deployed to address

      0x3b25fcdAee693f7DABe43c7E04E31C01a3A8C4EC

#### Useful Tools
- Remix IDE: https://remix.ethereum.org
- Rinkeby Faucet: https://faucet.rinkeby.io/
- Rinkeby Etherscan: https://rinkeby.etherscan.io/
- Ether Converter: https://etherconverter.online/
- Metamask Wallet: https://metamask.io/
