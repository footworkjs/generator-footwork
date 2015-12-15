var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  var returnValue = path.replace(/^\/base\//, '').replace(/\.js$/, '');
  return returnValue;
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\//, '').replace(/\.js$/, '');
    allTestFiles.push(normalizedTestModule);
  }
});

REQUIRECONFIG.baseUrl = '/base/';
REQUIRECONFIG.deps = [REQUIRECONFIG.deps || []].concat(allTestFiles);
REQUIRECONFIG.callback = window.__karma__.start;
for (var property in REQUIRECONFIG.paths) {
  if (REQUIRECONFIG.paths.hasOwnProperty(property)) {
    REQUIRECONFIG.paths[property] = REQUIRECONFIG.paths[property].replace(/^\.\.\//, 'public/');
  }
}

require.config(REQUIRECONFIG);
