const FollowersList = artifacts.require('FollowersList');

module.exports = function (deployer) {
  deployer.deploy(FollowersList);
};
