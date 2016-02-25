typeof REQUIRECONFIG === 'object' && require.config(REQUIRECONFIG);

require(["footwork", "config/asset-registration", "history"],
  function(fw) {
    // Tell footwork to sequence the animations of components in increments of 100msec by default
    fw.settings.defaultAnimationSequence = 100;

    // Start the application
    fw.start();

    window.fw = fw;
  }
);
