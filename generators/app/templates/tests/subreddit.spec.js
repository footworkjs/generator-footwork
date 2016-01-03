define(['footwork', 'config/asset-registration'], function(fw) {
  var testContainer;

  describe('subreddit component', function() {
    var testContainer;

    var subreddit;
    beforeAll(function() {
      subreddit = fw.observable().broadcastAs({ name: 'subreddit', 'namespace': 'router' });
    });
    afterAll(function() {
      subreddit.dispose();
    });

    beforeEach(function() {
      fixture.setBase('tests/fixtures');
    });
    afterEach(function() {
      fixture.cleanup(testContainer);
    });

    it('can load and display subreddit data', function(done) {
      var subredditName = '__mocked_data';
      var mockRedditData = fixture.load('reddit-data.json');

      var subRedditPosts = mockRedditData.data.children.map(function(rowData) {
        var post = rowData.data;
        return post;
      });

      // feed the subreddit component with our test/mock subredditName
      subreddit(subredditName);

      // mock the RESTful endpoint with the mockRedditData using our subredditName
      $.mockjax({
        url: "/r/" + subredditName + "/.json*",
        responseText: mockRedditData
      });

      // Generate a test DOM node container we will load our subreddit component in
      testContainer = makeTestContainer('<subreddit></subreddit>');

      // Initialize footwork on the container
      fw.start(testContainer);

      setTimeout(function() {
        expect($(testContainer).find('.post').length).toBe(subRedditPosts.length);
        done();
      }, 40);
    });
  });

});
