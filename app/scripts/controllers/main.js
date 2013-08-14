angular.module('envosApp')
  .controller('MainCtrl', function ($scope, Stanok, Categories) {

    // Product categories sub menu
    $scope.productCategories = Categories;

    // Stanok lighting
    $scope.stanok = Stanok;

    var selHead = $scope.stanok[0].head;
    var selHeight = $scope.stanok[0].height;
    var selBottom = $scope.stanok[0].bottom;


    $scope.setHead = function() {
      // body...
      console.log(selHead);
    }
    $scope.setHeight = function() {
      // body...
      console.log(selHeight);
    }
    $scope.setBottom = function() {
      // body...
      console.log(selBottom);
    }


  });