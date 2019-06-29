const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const OPTIONS = {
  defaultBlock: 'latest',
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5
};
const web3 = new Web3(ganache.provider(), null, OPTIONS);
const compiledContract = require('../compile');
const bytecode  = compiledContract.evm.bytecode.object;
const abiInterface  = compiledContract.abi;

let accounts;
let inbox;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  inbox = await new web3.eth.Contract(abiInterface)
    .deploy({ data: bytecode, arguments: ['Hi there!']})
    .send({ from: accounts[0], gas: '1000000'});
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);
  });

  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.strictEqual(message, 'Hi there!');
  });

  it('can change the message', async () => {
    await inbox.methods.setMessage('a new message').send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.strictEqual(message, 'a new message');
  });
});
