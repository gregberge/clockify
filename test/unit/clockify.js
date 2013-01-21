var expect = chai.expect;

describe('clockify', function() {

  beforeEach(function(done) {
    $('body').load('base/test/fixtures/clockify.html', function() {
      done();
    });
  });
  
  describe('access clockify function', function() {
    it('should exist a function clockify on jQuery', function() {
      expect($.fn.clockify).to.be.function;
    });
  });
});