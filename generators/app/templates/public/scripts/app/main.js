typeof REQUIRECONFIG === 'object' && require.config(REQUIRECONFIG);

require(["footwork", "assets"],
  function(fw) {
    fw.start();
  }
);
