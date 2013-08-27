angular.module('envosApp')
  .controller('MainCtrl', function ($scope, Stanok) {

    // Stanok lighting
    $scope.stanok = Stanok;

	  $scope.promos = [ 
	  	{ title: 'Станочные светильники: серия НКП 01У', url: 'views/promo/nkp.html'}, 
	  	{ title: 'Станочные светильники: серия ИКП 01У', url: 'views/promo/ikp.html'}, 
	  	{ title: 'Обогревающие светильники: серия НКП 01У', url: 'views/promo/nsp.html'}
	  ];
	  
	  $scope.promo = $scope.promos[0];
	  $scope.trigger = 0;

	  $scope.showPromo = function(num) {
	  	$scope.promo = $scope.promos[num];
	  	$scope.trigger = num;
	  }

		$scope.getSelectedSlide = function(num){
		  return ($scope.trigger==num) ? 'active' : '';
		}

  });