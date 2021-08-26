const { assert } = require('console');
const GasCost = artifacts.require('GasCost');
const web3utils = require('web3-utils');

contract('GasCost', (accounts) => {
  let GasCostInstance;
  before(async () => {
    GasCostInstance = await GasCost.new();
  });

  it("...should successfully call createInstance using the method's provided gas estimate", async () => {
    const gasEstimate = await GasCostInstance.createInstance.estimateGas();

    console.log(`**gasEstimation: ${gasEstimate}`);
    assert(gasEstimate <= 120000);
    const tx = await GasCostInstance.createInstance({
      gas: gasEstimate,
    });
    assert(tx);
  });

  it('...should successfully call a setConstant provided gas estimate', async () => {
    const gasEstimate = await GasCostInstance.setConstant.estimateGas();
    console.log(`**gasEstimation: ${gasEstimate}`);
    assert(gasEstimate <= 120000);
    const tx = await GasCostInstance.setConstant();
    assert(tx);
  });

  it('...should successfully call a setName provided gas estimate', async () => {
    let param = 'A simple string';
    const gasEstimate = await GasCostInstance.setName.estimateGas(param);
    console.log(`**gasEstimation: ${gasEstimate}`);
    assert(gasEstimate <= 120000);
    const tx = await GasCostInstance.setName(param, {
      gas: gasEstimate,
    });
    assert(tx);
  });

  it('...should successfully call a executeSetName provided gas estimate', async () => {
    let param = 'A simple string';
    const gasEstimate = await GasCostInstance.executeSetName.estimateGas(param);
    console.log(`**gasEstimation: ${gasEstimate}`);
    assert(gasEstimate <= 120000);
    const tx = await GasCostInstance.executeSetName(param, {
      gas: gasEstimate,
    });
    assert(tx);
  });

  it('...should successfully call a changeOwnerName provided gas estimate', async () => {
    let param = 'A simple string';
    const gasEstimate = await GasCostInstance.changeOwnerName.estimateGas(
      param,
    );
    console.log(`**gasEstimation: ${gasEstimate}`);
    assert(gasEstimate <= 120000);
    const tx = await GasCostInstance.changeOwnerName(param, {
      from: accounts[0],
      gas: gasEstimate,
    });
    assert(tx);
  });

  it('...should successfully call a executeChangeOwnerName provided gas estimate', async () => {
    let param = 'A simple string';
    const gasEstimate =
      await GasCostInstance.executeChangeOwnerName.estimateGas(param);
    console.log(`**gasEstimation: ${gasEstimate}`);
    assert(gasEstimate <= 120000);
    const tx = await GasCostInstance.executeChangeOwnerName(param, {
      from: accounts[0],
      gas: gasEstimate,
    });
    assert(tx);
  });

  it('...should successfully call a processBytes provided gas estimate', async () => {
    let param = 'A simple string';
    param = web3utils.asciiToHex(param);
    const gasEstimate = await GasCostInstance.processBytes.estimateGas(param);
    console.log(`**gasEstimation: ${gasEstimate}`);
    assert(gasEstimate <= 120000);
    const tx = await GasCostInstance.processBytes(param, {
      gas: gasEstimate,
    });
    assert(tx);
  });

  it('...should successfully call a changeAll provided gas estimate', async () => {
    let param = 'A simple string';
    const paramHex = web3utils.asciiToHex(param);
    let gasEstimate = 0;
    gasEstimate = await GasCostInstance.changeAll.estimateGas(
      param,
      param,
      paramHex,
    );
    assert(gasEstimate <= 120000);
    console.log(`**gasEstimation: ${gasEstimate}`);
    const tx = await GasCostInstance.changeAll(param, param, paramHex, {
      from: accounts[0],
      gas: gasEstimate,
    });
    assert(tx);
  });

  it('...should successfully call a changeAllTwice provided gas estimate', async () => {
    let param = 'A simple string';
    const paramHex = web3utils.asciiToHex(param);
    let gasEstimate = 0;
    gasEstimate = await GasCostInstance.changeAllTwice.estimateGas(
      param,
      param,
      paramHex,
    );
    console.log(`**gasEstimation: ${gasEstimate}`);
    assert(gasEstimate <= 120000);
    const tx = await GasCostInstance.changeAllTwice(param, param, paramHex, {
      from: accounts[0],
      gas: gasEstimate,
    });
    assert(tx);
  });

  it('...should successfully call a changeMapping provided gas estimate', async () => {
    let param = web3utils.toBN(12345);
    let gasEstimate = 0;
    gasEstimate = await GasCostInstance.changeMapping.estimateGas(param);
    console.log(`**gasEstimation: ${gasEstimate}`);
    assert(gasEstimate <= 120000);
    const tx = await GasCostInstance.changeMapping(param, {
      from: accounts[0],
      gas: gasEstimate,
    });
    assert(tx);
  });
});
