define(['footwork', 'assets'], function(fw) {

  describe('ExampleViewModel', function() {
    beforeEach(function(){
      fixture.setBase('tests/fixtures');
    });

    afterEach(function(){
      fixture.cleanup()
    });

    it('can be instantiated and bound declaratively', function(done) {
      // Generate a test DOM node container we will load our fixture HTML into
      var container = makeTestContainer(fixture.load('ExampleViewModel.html', false));

      // Initialize footwork on that container
      fw.start(container);

      // turn the returned DOM node container into a jQuery object so we can easily inspect it
      var $container = $(container);

      setTimeout(function() {
        expect($container.find('.someValue').text()).toEqual('testValue');
        done();
      }, 20);
    });
  });

});
