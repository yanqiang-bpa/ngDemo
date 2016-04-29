(function() {
  'use strict';

  angular
    .module('myNewProject')
    .controller('AnotherController', AnotherController);

  /** @ngInject */
  function AnotherController($scope) {
    $scope.loadData2 = function(){
      console.log("加载数据中222222222...");
    }
  }
})();
