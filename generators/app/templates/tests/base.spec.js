define(['footwork'], function(fw) {

  describe('just checking', function() {
    beforeEach(function(){
      fixture.setBase('tests/fixtures');
    });

    it('works for app', function() {
      var ExampleViewModelFixture = fixture.load('ExampleViewModel.html');
      console.log(ExampleViewModelFixture);
      expect(1).toEqual(1);
      // fw.start();
    });
  });
});
