(function() {
  'use strict';

  angular
    .module('myNewProject')
    .controller('NavbarController', NavbarController);

  /** @ngInject */
  function NavbarController($scope) {
  	$scope.types = ["DNA", "DNB", "CLS"];
  }
})();
