var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var modules = [];
var SRC_REGEXP = /public\/app\//;
var JS_REGEXP = /\.js$/;
var CONFIG_REGEXP = /public\/app\/config\/.*.js/;
var MAINFILE_REGEXP = /public\/app\/main.js/;

var jsToModule = function (path) {
  return path.replace(/^\/base\//, '../../').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    allTestFiles.push(jsToModule(file));
  } else if (SRC_REGEXP.test(file) && JS_REGEXP.test(file) && !CONFIG_REGEXP.test(file) && !MAINFILE_REGEXP.test(file)) {
    // disabled (used for coverage instrumentation) because modules do not match and are downloaded twice
    // TODO: Fix so that the same module names are used in both places
    // modules.push(jsToModule(file));
  }
});

var startTest = function () {
  require(modules, function () {
    window.__karma__.start();
  });
};

REQUIRECONFIG.baseUrl = '/base/public/' + REQUIRECONFIG.baseUrl;
REQUIRECONFIG.deps = [REQUIRECONFIG.deps || []].concat(allTestFiles);
REQUIRECONFIG.callback = startTest;

require.config(REQUIRECONFIG);
