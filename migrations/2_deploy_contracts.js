const ConvertLib = artifacts.require('ConvertLib');
const MetaCoin = artifacts.require('MetaCoin');
const GasCost = artifacts.require('GasCost');

module.exports = function (deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(GasCost);
};
