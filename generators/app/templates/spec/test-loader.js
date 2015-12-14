REQUIRECONFIG.paths.footwork = "../../<%= publicFolder %>/bower_components/footwork/dist/footwork-all";
require.config(REQUIRECONFIG);

require([ "footwork" ],
  function( fw ) {
    // export footwork to the global object so it is console-accessible
    window.fw = fw;

    if(typeof mochaPhantomJS !== 'undefined') {
      mochaPhantomJS.run();
    } else {
      mocha.run();
    }
  }
);
