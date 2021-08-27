import * as fs from 'fs';
import * as path from 'path';
/* eslint @typescript-eslint/no-var-requires: "off" */
const TruffleContractOfJSON = require('@truffle/contract');
const web3 = require('web3');
const provider = new web3.providers.HttpProvider('http://localhost:8545');

/**
 * Simple test function who loads all the truffle migrated contracts.
 * And interacts with them via rpc call
 */

/**
 * Account creation. Just for demo porposes. It always should be created and stored by the user.
 * TODO:
 *  - create demo account to emulate the user.
 *  - sent a transaction with that account.
 *  - sent a raw signed transaction.
 */

const directoryPath = path.join(__dirname, '..', 'build', 'contracts');
fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  files.forEach(function (file) {
    const src = path.join(directoryPath, file);
    fs.readFile(src, async (err, data) => {
      if (err) return console.error(err);
      const contractAsJSON = JSON.parse(data.toString('utf-8'));
      const contract = TruffleContractOfJSON(contractAsJSON);
      contract.setProvider(provider);
      try {
        const instance = await contract.deployed();
        console.log(src);
        console.log(
          `${contract.contractName}: was originally deployed at ${contract.network.address}`,
        );
        if (contract.contractName == 'GasCost') {
          /* Smell code, just to quick demo on an specific set of methods. */
          const name = await instance.getName.call();
          console.log(`Name from contract: ${name}`);
        }
      } catch (err: any) {
        console.error(err);
      }
    });
  });
});
