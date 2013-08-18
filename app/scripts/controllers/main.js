angular.module('envosApp')
  .controller('MainCtrl', function ($scope, Stanok) {

    // Stanok lighting
    $scope.stanok = Stanok;

  });