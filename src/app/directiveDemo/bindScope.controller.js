(function() {
  'use strict';

  angular
    .module('myNewProject')
    .controller('BindScopeController', BindScopeController);

  /** @ngInject */
  function BindScopeController($scope) {
    $scope.ctrlVar = "Hello, I'm in the controller."
    $scope.sayHello = function(anystr){
      alert("Hello " + anystr);
    }
    $scope.loadData = function(){
      console.log("加载数据中...");
    }

    $scope.title = "点击展开";
    $scope.text = "这里是内容";

    $scope.expanders = [{
      title: 'Click me to expand',
      text: 'Hi 1111'
    },{
      title: 'Click on me',
      text: 'Hi 2222'
    },{
      title: 'Click here',
      text: 'Hi 3333'
    }
    ]


  }
})();
