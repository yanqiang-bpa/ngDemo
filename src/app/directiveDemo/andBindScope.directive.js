(function(){
	"use strict";
	angular.module("myNewProject")
	.directive("andDire", function(){
		return{
			restirct: 'AE',
			scope:{
				greet: "&"
			},
			template:'<input type="text" ng-model="userName" /></br>'+
					'<button ng-click="greet({aa:userName})">Say Hello</button>'
		}
	})
})();