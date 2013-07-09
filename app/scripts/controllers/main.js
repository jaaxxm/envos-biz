'use strict';

angular.module('envosApp')
  .controller('MainCtrl', function ($scope) {
    $scope.productCategories = [
      {
        title: 'Станочные светильники', 
      }, 
      {
        title: 'Обогревающие светильники'
      }, 
      {
        title: 'Уличные фонари', 
        type : [
          'Helios',
          'Cobra',
          'Консольный'
        ]
      }, 
      {
        title: 'Спецзаказ', 
        type : [
          'Гибкая стойка',
          'Гибкая бронь'
        ]
      }
    ];
  });
