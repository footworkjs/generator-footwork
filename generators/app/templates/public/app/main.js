typeof REQUIRECONFIG === 'object' && require.config(REQUIRECONFIG);

require(["footwork", "config/asset-registration", "history"],
  function(fw) {
    fw.start();

    window.fw = fw;
  }
);
