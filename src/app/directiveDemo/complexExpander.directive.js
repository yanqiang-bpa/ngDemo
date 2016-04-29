(function(){
	"use strict";
	angular.module("myNewProject")
	.directive("myAccordion", function(){
		return{
			strict: "AE",
			replace: true,
			transclude: true,
			template: '<div ng-transclude></div>',
			// controller中的方法供外部调用
			controller: function(){
				var expanders = [];
				this.gotOpened = function(selectedExpander){
					angular.forEach(expanders, function(expander){
						if(selectedExpander != expander){
							expander.showMe = false;
						}
					})
				}
				this.addExpander = function(expander){
					expanders.push(expander);
				}
			}
		}
	})
	.directive("expander", function(){
		return{
			restrict: 'EA',
			replace: true,
			transclude: true,
			require: '^myAccordion',
			scope: {
				title: '=expanderTitle'
			},
			template: '<div>'
			+ '<div ng-click="toggle()" style="background-color: grey; border-style: solid; border-width: 5px;">{{title}}</div>'
			+ '<div ng-show="showMe" ng-transclude style="background-color: green; border-style: solid; border-width: 2px;"></div>'
			+ '</div>',
			link: function(scope, ele, attrs, accordionDire){
				scope.showMe = false;
				accordionDire.addExpander(scope);
				scope.toggle = function toggle(){
					scope.showMe = !scope.showMe;
					accordionDire.gotOpened(scope);
				}
			}
		}
	})
})();