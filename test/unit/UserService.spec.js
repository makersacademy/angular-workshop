describe('UserService', function() {
  beforeEach(module('promiseApp'));

  var UserService, httpBackend;
  var user = {login: "pingu"};

  beforeEach(inject(function(_UserService_, $httpBackend) {
    UserService = _UserService_
    httpBackend = $httpBackend;
    httpBackend.expectGET('http://api.github.com/users').respond([{id: 1}]);
    httpBackend.expectGET('http://api.github.com/users/1').respond(user);
  }));

  it('is very difficult to test properly a method that just returns the values', function(){
    // Why do we expect this to be undefined?
    expect(UserService.fetchLoginWithReturn()).toBe(undefined);

    // We need to run flush at the end, it flushes out all of the http requests
    // that are waiting to be sent (httpBackend doesn't send them immediately to
    // make testing easier by allowing us to decide when all of the requests
    // need to be sent)
    httpBackend.flush();
  });

  // Two better ways of writing our function so we can check the return value
  // which one do you prefer?
  it('it fetches the first user\'s login from GitHub using a promise', function() {
    UserService.fetchLoginWithPromise().then(function(login){
      expect(login).toEqual("pingu");
    });

    httpBackend.flush();
  });

  xit('it fetches the first user\'s login from GitHub using a callback', function() {
    UserService.fetchLoginWithCallback(function(login){
      expect(login).toEqual("pingu");
    });

    httpBackend.flush();
  });

});
