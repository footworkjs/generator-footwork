define(['footwork', 'assets'], function(fw) {

  describe('just checking', function() {
    beforeEach(function(){
      fixture.setBase('tests/fixtures');
    });

    afterEach(function(){
      fixture.cleanup()
    });

    it('works for app', function(done) {
      $(document.body).append(fixture.load('ExampleViewModel.html'));
      fw.start();

      setTimeout(function() {
        expect($('.someValue').text()).toEqual('testValue');
        done();
      }, 20);
    });
  });

});
