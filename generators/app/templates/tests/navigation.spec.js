define(['footwork', 'assets'], function(fw) {

  describe('navigation component', function() {
    beforeEach(function(){
      fixture.setBase('tests/fixtures');
    });

    afterEach(function(){
      fixture.cleanup()
    });

    it('can be instantiated and bound declaratively', function(done) {
      // Generate a test DOM node container we will load our fixture HTML into
      var container = makeTestContainer(fixture.load('navigation-component.html'));

      // Record the number of instantiated Navigation viewModels before starting
      var numNavsBefore = fw.viewModel.getAll('Navigation').length || 0;

      // Initialize footwork on that container
      fw.start(container);

      // turn the returned DOM node container into a jQuery object so we can easily inspect it
      var $container = $(container);

      setTimeout(function() {
        // expect that we should have 1 more nav than before
        expect(fw.viewModel.getAll('Navigation').length).toBe(numNavsBefore + 1);

        // using jasmine-jquery (https://github.com/velesin/jasmine-jquery) we can do easy DOM tests/validations
        expect($container).toContainElement('img.logo');
        done();
      }, 20);
    });
  });

});
