(function() {
  'use strict';

  angular
    .module('myNewProject')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/bindScope',{
        templateUrl: 'app/directiveDemo/bindScope.html',
        controller: 'BindScopeController',
      })
      .when('/customForm',{
        templateUrl: 'app/formDemo/FormCustom.html',
        controller: 'FormCustomController',
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
