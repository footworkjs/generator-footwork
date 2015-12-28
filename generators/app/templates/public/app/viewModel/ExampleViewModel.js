define(["footwork"],
  function(fw) {
    return fw.viewModel.create({
      initialize: function() {
        this.something = fw.observable('testValue');
      }
    });
  }
);
