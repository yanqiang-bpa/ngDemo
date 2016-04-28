(function() {
  'use strict';

  angular
    .module('myNewProject')
    .controller('BindScopeController', BindScopeController);

  /** @ngInject */
  function BindScopeController($scope) {
    $scope.ctrlVar = "Hello, I'm in the controller."
    $scope.sayHello = function(anystr){
      alert("Hello " + anystr);
    }
  }
})();
