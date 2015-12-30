define(["footwork"],
  function(fw) {
    return fw.viewModel.create({
      namespace: 'Navigation',
      initialize: function() {
        this.subreddit = fw.observable().receiveFrom('router', 'subreddit');
      }
    });
  }
);
