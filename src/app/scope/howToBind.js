(function() {
  'use strict';

  angular
    .module('myNewProject')
    .controller("CounterCtrl", CounterCtrl)
    .directive('myclick', myclick);

  function CounterCtrl($scope){
  	$scope.counter = 0;
  	$scope.increase = function(){
  		$scope.counter++;
  	}
  	console.log($scope)
  }
  /** @ngInject */
  function myclick() {
    return function(scope, element, attr){
    	element.on("click", function(){
    		console.log(scope)
    		scope.counter++;
    		// scope.$apply();
    		scope.$digest();
    	})
    }
  }
})();
