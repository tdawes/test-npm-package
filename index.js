var path = require("path");

function getPackageJson() {
  var packageJsonFilePath = path.join(__dirname, "package.json");
  return require(packageJsonFilePath);
}

module.exports = {
  getVersion() {
    var packageJson = getPackageJson();
    return packageJson.version;
  },
};
