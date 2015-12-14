var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  var returnValue = path.replace(/^\/base\//, '../').replace(/\.js$/, '');
  return returnValue;
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

REQUIRECONFIG.baseUrl = '/base/' + REQUIRECONFIG.baseUrl;
REQUIRECONFIG.deps = [REQUIRECONFIG.deps || []].concat(allTestFiles);
REQUIRECONFIG.callback = window.__karma__.start;

require.config(REQUIRECONFIG);
