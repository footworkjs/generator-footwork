define(['footwork', 'assets'], function(fw) {
  var testContainer;

  describe('subreddit component', function() {
    var subreddit;

    beforeAll(function() {
      subreddit = fw.observable().broadcastAs({ name: 'subreddit', 'namespace': 'router' });
    });
    afterAll(function() {
      subreddit.dispose();
    });

    it('can load subreddit data', function(done) {
      var mockSubreddit = '__mocked_data';
      $.mockjax({
        url: "/r/" + mockSubreddit + "/*",
        responseText: fixture.load('reddit-data.json')
      });

      subreddit(mockSubreddit);

      // Generate a test DOM node container we will load our fixture HTML into
      testContainer = makeTestContainer('<subreddit></subreddit>');

      // Initialize footwork on that container
      fw.start(testContainer);

      setTimeout(function() {
        expect(testContainer).toContainElement('.post');
        done();
      }, 20);
    });
  });

});
