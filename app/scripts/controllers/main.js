angular.module('envosApp')
  .controller('MainCtrl', function ($scope, $window, Stanok) {

    // Stanok lighting
    $scope.stanok = Stanok;

	  $scope.promos = [ 
	  	{ title: 'nkp', url: 'views/promo/nkp.html'}, 
	  	{ title: 'ikp', url: 'views/promo/ikp.html'}, 
	  	{ title: 'nsp', url: 'views/promo/nsp.html'}
	  ];
	  
	  $scope.promo = $scope.promos[0];
	  $scope.trigger = 0;

	  $scope.showPromo = function(num) {
	  	$scope.promo = $scope.promos[num];
	  	$scope.trigger = num;
	  }

    // $scope.imgNumber = "1";
    // $scope.change = function(imgNumber) {
    //     $scope.imgNumber = imgNumber;
    // }


		$scope.getSelectedSlide = function(num){
		  return ($scope.trigger==num) ? 'active' : '';
		}

  });