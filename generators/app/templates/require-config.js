var REQUIRECONFIG = {
  baseUrl: "scripts",
  paths: {
    "requireLib": "<%= subPathsToRootPub %>bower_components/requirejs/require",
    "text": "<%= subPathsToRootPub %>bower_components/requirejs-text/text",
    "footwork": "<%= subPathsToRootPub %>bower_components/footwork/dist/footwork-all-history",
    "assets": "app/assets"
  },
  waitSeconds: 1500
};

if(typeof module === 'object') {
  module.exports = REQUIRECONFIG;
}
