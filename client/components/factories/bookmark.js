(function(){
  'use strict';
  angular.module('yummy')
  .factory('Bookmark', ['$http', function($http){
    function create(category){
      return $http.post('/categories', category);
    }

    return {create:create};
  }]);
})();
