picturall.controller('PictureController', function($scope, $routeParams, resourcePic) {
	$scope.picture = {};
	$scope.message = "";

	if($routeParams.pictureId){		
		resourcePic.get({ pictureId: $routeParams.pictureId }, function(picture) {
			$scope.picture = picture;
		}, function(error) {
			console.log(erro);
			$scope.message = "Unable to get the picture"; 
		});
	}

	$scope.submit = function() {
		if($scope.new_picture.$valid) {
			if($scope.picture._id) {
				resourcePic.update({ pictureId: $scope.picture._id },
					$scope.picture, function() {
						$scope.message = "Picture updated successfully";
					}, function(error) {
						console.log(error);
						$scope.message = "Unable to update the picture"; 	
					});
			}
			else {
				resourcePic.save($scope.picture, function() {
					cleanData();
					$scope.message = "Picture inserted successfully";
				}, function(error) {
					console.log(error);
					$scope.message = "Error inserting photo";
				});
			}
		}
	}; 

	// Functions - private scope
	var cleanData = function() {
		$scope.picture.titulo    = " ";
		$scope.picture.url       	= " ";
		$scope.picture.descricao = " ";
	};

	/* Otherwise to do with $http  */
	// if($routeParams.pictureId){		
	// 	$http.get('v1/fotos/' + $routeParams.pictureId)
	// 	.success(function(picture) {
	// 		$scope.picture = picture;
	// 	})
	// 	.error(function(error) {
	// 		console.log(erro);
	// 		$scope.message = "Unable to get the picture"; 
	// 	});
	// } 

	// $scope.submit  = function() {	
	// 	if($scope.new_picture.$valid) {
	// 		if($scope.picture._id) {
	// 			$http.put('v1/fotos/' + $scope.picture._id, $scope.picture)
	// 			.success(function() {
	// 				$scope.message = "Picture updated successfully";
	// 			})
	// 			.error(function(error) {
	// 				console.log(error);
	// 				$scope.message = "Unable to update the picture"; 
	// 			});
	// 		}
	// 		else {				
	// 			$http.post("v1/fotos", $scope.picture)
	// 			.success(function () {
	// 				cleanData();
	// 				$scope.message = "Picture inserted successfully";
	// 			})
	// 			.error(function (error) {
	// 				$scope.message = "Error inserting photo";
	// 			});			
	// 		}
	// 	}				
	// };

});   