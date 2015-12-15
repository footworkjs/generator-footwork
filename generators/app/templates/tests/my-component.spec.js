define(['footwork', 'assets'], function(fw) {

  describe('my-component', function() {
    beforeEach(function(){
      fixture.setBase('tests/fixtures');
    });

    afterEach(function(){
      fixture.cleanup()
    });

    // it('works', function(done) {
    //   $(document.body).append(fixture.load('my-component.html'));
    //   fw.start();

    //   setTimeout(function() {
    //     expect($('.someValue').text()).toEqual('testValue');
    //     done();
    //   }, 20);
    // });
  });

});
