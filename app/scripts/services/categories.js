'use strict';

angular.module('envosApp')
  .factory('Categories', [function () {
    return [
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
}]);    