define(["footwork"],
  function(fw) {

    fw.components.register('loading-display', {
      template: '<div class="loading-display fade-in-from-bottom"><div class="loading-message"><span class="glyphicon glyphicon-refresh spinner"></span> Loading...</div></div>'
    });

    return fw.router.create({
      namespace: 'router',
      initialize: function() {
        this.subreddit = fw.observable().broadcastAs('subreddit');
      },
      routes: [
        {
          route: '/',
          title: 'Home',
          controller: function() {
            this.subreddit(undefined);
            this.outlet('mainContent', 'index-page');
          }
        }, {
          route: '/r/:subreddit',
          title: function(subreddit) {
            return '/r/' + subreddit;
          },
          controller: function(subreddit) {
            this.subreddit(subreddit);
            this.outlet('mainContent', null);
            this.outlet('mainContent', 'subreddit-page');
          }
        }
      ],
      minTransitionPeriod: 400,
      showDuringLoad: 'loading-display'
    });

  }
);
