angular.module('picturall').controller('PicturesController', function($scope, $http) {
	$scope.pictures = [];
	$scope.filter   = "";
	// Get pictures and assigns into the $scope.pictures
	$http.get('/v1/fotos')
	.success(function(pictures){
		$scope.pictures = pictures;
	})
	.catch(function(error) {
		console.log(error);
	});

	/*
	var promise = $http.get('/v1/fotos');
	promise.then(function(result){
		$scope.pictures = result.data;
	})
	.catch(function(error) {
		console.log(error);
	});
	*/
}); 