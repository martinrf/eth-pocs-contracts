const path = require('path');
const fs = require('fs');
const solc = require('solc');

const pronEventPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(pronEventPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'Inbox.sol' : {
      content: source
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': [ '*' ]
      }
    }
  }
};

const compiled = JSON.parse(solc.compile(JSON.stringify(input)));
module.exports = compiled.contracts['Inbox.sol']['Inbox'];
