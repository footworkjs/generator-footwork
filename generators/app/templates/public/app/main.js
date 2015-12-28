typeof REQUIRECONFIG === 'object' && require.config(REQUIRECONFIG);

require(["footwork", "assets", "history"],
  function(fw) {
    fw.start();

    window.fw = fw;
  }
);
