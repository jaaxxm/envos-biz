'use strict';

angular.module('envosApp')
  .controller('ProductsCtrl', function ($scope, Categories) {
    // Product categories sub menu
    $scope.productCategories = Categories;
    
  });
