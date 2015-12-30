define(["footwork"],
  function(fw) {
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
            this.outlet('mainContent', 'subreddit-page');
          }
        }
      ]
    });
  }
);
