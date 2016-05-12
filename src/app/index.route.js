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
      .when('/instance/:inst',{
        templateUrl: 'app/instances/instance.template.html',
        controller: 'InstanceController',
        // resolve: {
        //         columnDefs: function($http){
        //             return $http.get("data/DNA.json");
        //         }
        //     }
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
