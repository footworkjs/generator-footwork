var REQUIRECONFIG = {
  baseUrl: "scripts",
  paths: {
    "requireLib": "../bower_components/requirejs/require",
    "text": "../bower_components/requirejs-text/text",
    "footwork": "../bower_components/footwork/dist/footwork-all-history",
    "jquery": "../bower_components/jquery/dist/jquery",
    "assets": "app/assets"
  },
  waitSeconds: 1500
};

if(typeof module === 'object') {
  module.exports = REQUIRECONFIG;
}
