define(["footwork", "lodash", "component/subreddit/SubredditPostsCollection"],
  function(fw, _, SubredditPostsCollection) {

    return fw.viewModel.create({
      namespace: 'subreddit',
      initialize: function() {
        this.posts = SubredditPostsCollection();
        this.postFetch = this.posts.fetch();
      },
      resolved: function(resolve) {
        resolve(this.postFetch);
      }
    });

  }
);
