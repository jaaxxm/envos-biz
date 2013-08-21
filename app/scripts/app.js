'use strict';

angular.module('envosApp', ['ngRoute', 'ngAnimate'])
  .controller('envosAppCtrl', function($rootScope) {
    $rootScope.topScope = $rootScope;
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        activetab: 'main'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl',
        activetab: 'products'
      })      
      .when('/needs', {
        templateUrl: 'views/needs.html',
        controller: 'NeedsCtrl',
        activetab: 'needs'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        activetab: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
