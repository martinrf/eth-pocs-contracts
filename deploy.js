// TODO: Move this deprecated package to the latest version
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledContract = require('./compile');
const bytecode  = compiledContract.evm.bytecode.object;
const abiInterface  = compiledContract.abi;

/*
* first argument is the mnemonic of the account you want to use
* second argument is the infura api key
* */
const provider = new HDWalletProvider(
  process.env.NMEMONIC,
  process.env.INFURAAPIKEY
);
const web3 = new Web3(provider);

const deploy = async () => {
  /* eslint-disable-next-line no-console */
  console.log('Starting Deployment Contract...');
  const accounts = await web3.eth.getAccounts();
  /* eslint-disable-next-line no-console */
  console.log('Attempting to deploy from account: ', accounts[0]);

  const deployedContract = await new web3.eth.Contract(abiInterface)
    .deploy({ data: bytecode, arguments: ['Hi there!']})
    .send({ gas: '1000000', from: accounts[0]});
  /* eslint-disable-next-line no-console */
  console.log('Contract deployed to address: ', deployedContract.options.address);
};

deploy();
