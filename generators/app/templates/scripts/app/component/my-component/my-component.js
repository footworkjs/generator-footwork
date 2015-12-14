define(["footwork"],
  function(fw) {
    return fw.viewModel.create({
      initialize: function() {
        this.me = fw.observable('my-component');
      }
    });
  }
);
