(function(){
	"use strict";
	angular.module("myNewProject")
	.directive("superman", function(){
		return{
			scope: {},
			strict: "AE",
			link: function(scope, ele, attr){
				ele.bind("mouseenter", function(){
					console.log(scope.abilities);
				})
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
	.directive("speed", function(){
		return{
			require: "^superman",
			// 第四个参数是外部指令，即由require引入的指令
			link: function(scope, ele, attr, supermanDire){
				supermanDire.addSpeed();
			}
		}
	})
	.directive("strength", function(){
		return{
			require: "^superman",
			link: function(scope, ele, attr, supermanDire){
				supermanDire.addStrength();
			}
		}
	})
	.directive("light", function(){
		return{
			require: "^superman",
			link: function(scope, ele, attr, supermanDire){
				supermanDire.addLight();
			}
		}
	})
})();