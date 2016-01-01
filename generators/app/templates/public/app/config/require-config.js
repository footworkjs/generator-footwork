var REQUIRECONFIG = {
  baseUrl: "app",
  paths: {
    "requireLib": "../bower_components/requirejs/require",
    "text": "../bower_components/requirejs-text/text",
    "footwork": "../bower_components/footwork/build/footwork-bare-jquery",
    "knockout": "../bower_components/knockout/dist/knockout.debug",
    "reqwest": "../bower_components/reqwest/reqwest",
    "postal": "../bower_components/postal.js/lib/postal",
    "lodash": "../bower_components/lodash/lodash",
    "jquery": "../bower_components/jquery/dist/jquery",
    "history": "../bower_components/history.js/scripts/bundled/html5/native.history",
    "assets": "config/assets-config"
  },
  waitSeconds: 1500
};

if(typeof module === 'object') {
  module.exports = REQUIRECONFIG;
}
