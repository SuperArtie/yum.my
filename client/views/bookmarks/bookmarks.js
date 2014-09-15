(function(){
  'use strict';
  angular.module('yummy')
  .controller('BookmarksCtrl', ['$scope', 'Bookmark', function($scope, Bookmark){
    $scope.category = {};
    $scope.addCategory = function(){
      $scope.category.name = $scope.name;
      Bookmark.create($scope.category).then(function(response){
      });
    };
  }]);
})();
