define(["footwork", "lodash"],
  function(fw, _) {

    var subreddit = fw.observable().receiveFrom('router', 'subreddit');
    var SubRedditPostsCollection = fw.collection.create({
      url: function() {
        return 'https://www.reddit.com/r/' + subreddit() + '/.json?jsonp=getJSON';
      },
      ajaxOptions: {
        jsonpCallback: 'getJSON',
        dataType: 'jsonp'
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
        this.posts = SubRedditPostsCollection();
        this.posts.fetch();
      }
    });

  }
);
