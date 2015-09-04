picturall.controller('PicturesController', function($scope, $http) {
	$scope.pictures = [];
	$scope.filter   = "";
	$scope.message  = "";
	// Get pictures and assigns into the $scope.pictures
	$http.get('/v1/fotos')
	.success(function(pictures){
		$scope.pictures = pictures;
	})
	.catch(function(error) {
		console.log(error);
	});
	// Remove a picture
	$scope.remove = function(picture) {			
		$http.delete('/v1/fotos/' + picture._id)
		.success(function() {
			var indexPic = $scope.pictures.indexOf(picture);
			$scope.pictures.splice(indexPic, 1);
			$scope.message = "Picture " + picture.titulo + " removed successfully"; 
		})
		.error(function(error) {
			$scope.message = "Unable to remove the picture " + picture.titulo; 
		});
	}; 

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