define(["footwork", "lodash"],
  function(fw, _) {

    var subreddit = fw.observable().receiveFrom('router', 'subreddit');

    var SubRedditPostsCollection = fw.collection.create({
      url: function() {
        return 'http://www.reddit.com/r/' + subreddit() + '/.json?jsonp=getJSON';
      },
      parse: function(response) {
        return response.data.children.map(function(rowData) {
          var post = rowData.data;
          post.selftext_html = _.unescape(rowData.data.selftext_html);
          post.href = post.is_self ? 'http://reddit.com' + post.permalink : post.url;
          return post;
        });
      }
    });

    return fw.viewModel.create({
      namespace: 'subreddit',
      initialize: function() {

        var self = this;
        this.posts = new SubRedditPostsCollection();

        function getRedditPosts() {
          subreddit() && self.posts.fetch({
            jsonpCallback: 'getJSON',
            dataType: 'jsonp'
          });
        }
        getRedditPosts();
        this.subredditSub = subreddit.subscribe(getRedditPosts);

        window.subreddit = this;
      }
    });

  }
);
