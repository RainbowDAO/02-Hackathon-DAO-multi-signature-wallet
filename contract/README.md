## Documentation on how to run the project

### Creator
Create multi-signature wallet, manage multi-signature wallet address, store basic information

### MultiSign
The specific logic of multiple wallets

### Contracts

1. Make sure you have node,npm and truffle installed.
2. Clone this repository.
3. Run ```npm install```
5. To run compile, run ```truffle compile```
6. To deploy the contracts, first open hardhat.config.js and change the accounts variables to your own private keys. Then change the defaultNetwork accordingly
   , deploy on your own network,run ```truffle migrate --network your network```

