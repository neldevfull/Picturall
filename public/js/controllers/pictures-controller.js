picturall.controller('PicturesController', function($scope, resourcePic) {
	$scope.pictures = [];
	$scope.filter   = "";
	$scope.message  = "";
	// Get pictures and assigns into the $scope.pictures

	resourcePic.query(function(pictures) {
		$scope.pictures = pictures; 
	}, function(error) {
		console.log(error);
	});

	$scope.remove = function(picture) {
		resourcePic.delete({pictureId: picture._id}, function() {
			var indexPic = $scope.pictures.indexOf(picture);
			$scope.pictures.splice(indexPic, 1);
			$scope.message = "Picture " + picture.titulo + " removed successfully";
		}, function(errorr) {
			console.log(error);
			$scope.message = "Unable to remove the picture " + picture.titulo; 
		});
	};
	
	/* Otherwise to do with $http  */	
	// Get pictures
	// $http.get('/v1/fotos')
	// .success(function(pictures){
	// 	$scope.pictures = pictures;
	// })
	// .catch(function(error) {
	// 	console.log(error);
	// });

	//Remove a picture
	// $scope.remove = function(picture) {			
	// 	$http.delete('/v1/fotos/' + picture._id)
	// 	.success(function() {
	// 		var indexPic = $scope.pictures.indexOf(picture);
	// 		$scope.pictures.splice(indexPic, 1);
	// 		$scope.message = "Picture " + picture.titulo + " removed successfully"; 
	// 	})
	// 	.error(function(error) {
	// 		$scope.message = "Unable to remove the picture " + picture.titulo; 
	// 	});
	// }; 	
}); 