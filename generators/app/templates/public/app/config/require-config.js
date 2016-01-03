var REQUIRECONFIG = {
  baseUrl: "app",
  paths: {
    /**
     * Note that if you add any new bower assets you will need to also add a reference
     * to them in the files section of karma.conf.js. This will allow the unit tests have
     * access to them.
     */
    "requireLib": "../bower_components/requirejs/require",
    "text": "../bower_components/requirejs-text/text",
    "footwork": "../bower_components/footwork/build/footwork-bare-jquery",
    "knockout": "../bower_components/knockout/dist/knockout.debug",
    "reqwest": "../bower_components/reqwest/reqwest",
    "postal": "../bower_components/postal.js/lib/postal",
    "lodash": "../bower_components/lodash/lodash",
    "jquery": "../bower_components/jquery/dist/jquery",
    "history": "../bower_components/history.js/scripts/bundled/html5/native.history"
  },
  waitSeconds: 1500
};

if(typeof module === 'object') {
  module.exports = REQUIRECONFIG;
}
