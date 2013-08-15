'use strict';

angular.module('envosApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
  .controller('envosAppCtrl', function($rootScope) {
    $rootScope.topScope = $rootScope;
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .when('/product', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl'
      })
      .when('/needs', {
        templateUrl: 'views/needs.html',
        controller: 'NeedsCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
