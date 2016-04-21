promiseApp.service('UserService', ['$http', function($http) {
  this.fetchLoginWithReturn = function(){
    var login;

    // Why is this not best practice when using promises?
    // Think about why promises were invented in the first place for
    $http.get('http://api.github.com/users').then(function(response){
      $http.get('http://api.github.com/users/' + response.data[0].id).then(function(user){
        login = user.login;
      });
    });

    return login;
  };
}]);
