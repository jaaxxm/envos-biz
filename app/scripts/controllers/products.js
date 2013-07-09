'use strict';

angular.module('envosApp')
  .controller('ProductsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.opts = {
        disable: 'left'
    };
  });
