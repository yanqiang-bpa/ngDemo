(function() {
  'use strict';

  angular
    .module('myNewProject')
    .controller('InstanceController', InstanceController);

  /** @ngInject */
  function InstanceController($scope, $timeout, $stateParams, $http) {
    $scope.instance_type = $stateParams.type;

    $scope.instGrid = {
        enableSorting: true,
        enableFiltering: true,
        enableRowSelection: true,
        enableSelectAll: true,
        selectionRowHeaderWidth: 35,
        enableGridMenu: true,
        rowHeight: 35,
        showGridFooter: true,
        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi; //register UI grid API
        }
    };

    $http.get("data/" + $scope.instance_type + "_data.json")
    .success(function(data){
      $scope.instGrid.data = data;
      console.log($scope.instGrid.data)
    })



    $http.get("data/" + $scope.instance_type + ".json")
    .success(function(data){
      $scope.columns = data;
      $scope.instGrid.columnDefs = $scope.columns;
      console.log($scope.columns)
    })
  }
})();
