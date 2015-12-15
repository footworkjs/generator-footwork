var allTestFiles = [];
var TESTFILENAME_REGEXP = /(spec|test)\.js$/i;

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TESTFILENAME_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\//, '../../').replace(/\.js$/, '');
    allTestFiles.push(normalizedTestModule);
  }
});

var parentDir = /^\.\.\//;

REQUIRECONFIG.baseUrl = '/base/public/' + REQUIRECONFIG.baseUrl;
REQUIRECONFIG.deps = [REQUIRECONFIG.deps || []].concat(allTestFiles);
REQUIRECONFIG.callback = window.__karma__.start;
for (var property in REQUIRECONFIG.paths) {
  if (REQUIRECONFIG.paths.hasOwnProperty(property)) {
    if(REQUIRECONFIG.paths[property].match(parentDir)) {
      REQUIRECONFIG.paths[property] = REQUIRECONFIG.paths[property].replace(parentDir, '../');
    } else {
      REQUIRECONFIG.paths[property] = REQUIRECONFIG.paths[property];
    }
  }
}

require.config(REQUIRECONFIG);
