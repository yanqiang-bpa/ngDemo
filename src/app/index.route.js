(function() {
  'use strict';

  angular
    .module('myNewProject')
    .config(
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
          })
          .state('bindScope',{
            url: '/scope',
            templateUrl: 'app/directiveDemo/bindScope.html',
            controller: 'BindScopeController',
          })
          .state('customForm',{
            url: '/form',
            templateUrl: 'app/formDemo/FormCustom.html',
            controller: 'FormCustomController',
          })
          .state('instance',{
            url: '/instance?type',
            templateUrl: 'app/instances/instance.template.html',
            controller: 'InstanceController',
          })
          .state('counter',{
            url: '/counter',
            templateUrl: 'app/scope/howToBind.html',
            controller: 'CounterCtrl',
          });
      }
    );

  

})();
