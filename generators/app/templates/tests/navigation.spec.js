define(['footwork', 'config/asset-registration'], function(fw) {

  describe('navigation component', function() {
    var testContainer;

    beforeEach(function() {
      fixture.setBase('tests/fixtures');
    });
    afterEach(function() {
      fixture.cleanup(testContainer);
    });

    it('has the logo image in it', function(done) {
      // Generate a test DOM node container we will load our fixture HTML into
      testContainer = makeTestContainer(fixture.load('navigation-component.html'));

      // Record the number of instantiated Navigation viewModels before starting
      var numNavsBefore = fw.viewModel.getAll('Navigation').length;

      // Initialize footwork on that container
      fw.start(testContainer);

      setTimeout(function() {
        // expect that we should have 1 more Navigation instance than before
        expect(fw.viewModel.getAll('Navigation').length).toBe(numNavsBefore + 1);

        // using jasmine-jquery (https://github.com/velesin/jasmine-jquery) we can do easy DOM tests/validations
        expect(testContainer).toContainElement('img.logo');
        done();
      }, 20);
    });
  });

});
