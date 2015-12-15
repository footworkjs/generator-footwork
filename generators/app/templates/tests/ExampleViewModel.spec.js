define(['footwork', 'assets'], function(fw) {

  describe('just checking', function() {
    beforeEach(function(){
      fixture.setBase('tests/fixtures');
    });

    afterEach(function(){
      fixture.cleanup()
    });

    it('works for app', function(done) {
      // Generate a test DOM node container we will load our fixture HTML into
      var container = makeTestContainer(fixture.load('ExampleViewModel.html'));

      // Initialize footwork on that container
      fw.start(container);

      // turn the returned DOM node container into a jQuery object so we can easily inspect it
      var $container = $(container);

      setTimeout(function() {
        expect($('.someValue').text()).toEqual('testValue');
        done();
      }, 20);
    });
  });

});
