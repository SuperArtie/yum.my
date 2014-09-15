(function(){
  'use strict';
  angular.module('yummy')
  .controller('RegisterCtrl', ['$scope', 'User', function($scope, User){
    $scope.user = {};

    function success(response){
      toastr.success('User successfully registered.');
    }

    function failure(){
      toastr.error('Error during user registration. Try again.');
    }

    $scope.register = function(){
      User.register($scope.user).then(success, failure);
      $scope.user = {};
    };
  }]);
})();
