define(['footwork', 'assets'], function(fw) {

  describe('my-component', function() {
    beforeEach(function(){
      fixture.setBase('tests/fixtures');
    });

    afterEach(function(){
      fixture.cleanup()
    });

    it('can be instantiated and bound declaratively', function(done) {
      // Generate a test DOM node container we will load our fixture HTML into
      var container = makeTestContainer(fixture.load('my-component.html', false));

      // Initialize footwork on that container
      fw.start(container);

      // turn the returned DOM node container into a jQuery object so we can easily inspect it
      var $container = $(container);

      setTimeout(function() {
        expect($container.find('.component-name').text()).toEqual('my-component');
        done();
      }, 20);
    });
  });

});
