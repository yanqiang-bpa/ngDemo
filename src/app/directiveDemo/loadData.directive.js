(function(){
	"use strict";
	angular.module("myNewProject")
	.directive("loadData", function(){
		return{
			restrict: "AE",
			link: function(scope, ele, attr){
				ele.bind("mouseenter", function(){
					//第一种方式，直接调用父controller中的方法，
					//前提是起所在的controller中存在该方法
					// scope.loadData();

					//使用$apply
					// scope.$apply("loadData()");

					scope.$apply(attr.howtoload);
				})
			}
		}
	})
})();