'use strict';

angular.module('envosApp')
  .controller('NavCtrl', function ($scope, $route) {
    $scope.name = "John";
    $scope.$route = $route;
  });
