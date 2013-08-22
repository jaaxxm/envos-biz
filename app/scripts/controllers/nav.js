'use strict';

angular.module('envosApp')
  .controller('NavCtrl', function ($scope, $route) {
    $scope.$route = $route;
  });
