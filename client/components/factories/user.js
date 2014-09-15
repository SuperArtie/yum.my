(function(){
  'use strict';

  angular.module('yummy')
  .factory('User', ['$http', function($http){

    function register(user){
      return $http.post('/register', user);
    }

    function login(user){
      return $http.post('/login', user);
    }

    function logout(user){
      return $http.delete('/logout', user);
    }

    return {register:register, login:login, logout:logout};
  }]);
})();

