define(['footwork'], function(fw) {
  jasmine.getFixtures().fixturesPath = 'base/fixtures';

  describe('just checking', function() {
    // load the test html template fixture
    var fixture = setFixtures('<div id="target"><viewModel module="ExampleViewModel"></viewModel></div>');

    it('works for app', function() {
      expect(1).toEqual(1);
      fw.start();
      expect(fixture.find('#target').length).toEqual(1);
    });
  });
});
