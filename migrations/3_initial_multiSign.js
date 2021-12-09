const MultiSign = artifacts.require("MultiSign");
module.exports = function (deployer) {
  deployer.deploy(MultiSign);
};
