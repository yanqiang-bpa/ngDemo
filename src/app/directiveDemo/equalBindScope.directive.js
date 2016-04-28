(function(){
	'use strict';
	angular.module("myNewProject")
	.directive("equalDire", function(){
		return{
			restrict: 'AE',
			scope:{
				flavor:"="
			},
			template: '<input type="text" ng-model="flavor"/>'
		}
	})
})();