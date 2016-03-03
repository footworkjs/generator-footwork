define(["footwork", "lodash"],
  function(fw, _) {

    var subreddit = fw.observable('javascript').receiveFrom('router', 'subreddit');

    return fw.collection.create({
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
          post.comments_url = 'http://reddit.com' + post.permalink;
          post.href = post.is_self ? post.comments_url : post.url;
          return post;
        });
      }
    });

  }
);
