define(["footwork"],
  function(fw) {
    return fw.viewModel.create({
      namespace: 'Navigation',
      initialize: function() {
        this.me = fw.observable('my-component');
      }
    });
  }
);
