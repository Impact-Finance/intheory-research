const ResearchProjectFactory = artifacts.require('ResearchProjectFactory.sol');

module.exports = function (deployer) {
  deployer.deploy(ResearchProjectFactory);
};
