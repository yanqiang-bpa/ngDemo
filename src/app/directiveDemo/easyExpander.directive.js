(function(){
	"use strict";
	angular.module("myNewProject")
	.directive("easyExpander", function(){
		return{
			scope: {
				title: '=expanderTitle'
			},
			strict: "AE",
			replace: true,
			transclude: true,
			template: '<div>'
			+ '<div ng-click="toggle()">{{title}}</div>'
			+ '<div ng-show="showMe" ng-transclude></div>'
			+ '</div>',
			link: function(scope, ele, attr){
				scope.showMe = false;
				scope.toggle = function(){
					scope.showMe = !scope.showMe;
				}
			},
			// controller中的方法供外部调用
			controller: function($scope){
				$scope.abilities = [];
				this.addSpeed = function(){
					$scope.abilities.push("speed");
				};
				this.addStrength = function(){
					$scope.abilities.push("strength");
				}
				this.addLight = function(){
					$scope.abilities.push("light");
				}
			}
		}
	})
})();