define(['footwork', 'lodash', 'helper/states'], function(fw, _, states) {

  describe('states list', function() {
    beforeEach(function(){
      fixture.setBase('tests/fixtures');
    });

    afterEach(function(){
      fixture.cleanup();
    });

    it('has 50 states and 1 extra for DC', function() {
      expect(_.keys(states).length).toEqual(51);
      expect(_.keys(states)).toContain('DC');
    });
  });

});
