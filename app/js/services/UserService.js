promiseApp.service('UserService', ['$http', function($http) {

  // This is messy to show an example of what not to do
  this.fetchLoginWithReturn = function(){
    var login;

    // Why is this not best practice when using promises?
    // Think about why promises were invented in the first place for
    $http.get('http://api.github.com/users').then(function(response){
      $http.get('http://api.github.com/users/' + response.data[0].id).then(function(response){
        login = response.data.login;
      });
    });

    return login;
  };

  this.fetchLoginWithPromise = function(){
    return $http.get('http://api.github.com/users')
    .then(_getFirstUser)
    .then(_getLogin);
  };

  // It's probably clear that this isn't as clean an approach as just using
  // promises like we do above!
  this.fetchLoginWithCallback = function(callback){
    $http.get('http://api.github.com/users').then(function(response){
      $http.get('http://api.github.com/users/' + response.data[0].id).then(function(response){
        var login = response.data.login;
        callback(login);
      });
    });
  };


  function _getFirstUser(response){
    return $http.get('http://api.github.com/users/' + response.data[0].id);
  }

  function _getLogin(response) {
    // Even if we don't return a promise here, behind the scenes this will be 
    // wrapped in a promise, so in our tests we can once again call `.then`,
    // this time with the user's login being passed in as an argument
    return response.data.login;
  }
}]);
