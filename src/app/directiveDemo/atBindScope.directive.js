(function(){
  'use strict';
  angular
  	.module('myNewProject')
  	.directive('atDire', function(){
	  return{
	  	restrict: 'AE',
	  	scope: {
	  	  flavor: "@"
	  	},
	    template: "<div>{{flavor}}</div>",
	    // link: function(scope, element, attrs){
	    // 	scope.flavor = attrs.someAttr
	    // }
	  }
  	})
})();