picturall.controller('PictureController', function($scope, $http, $routeParams) {
	$scope.picture = {};
	$scope.message = "";

	if($routeParams.pictureId){		
		$http.get('v1/fotos/' + $routeParams.pictureId)
		.success(function(picture) {
			$scope.picture = picture;
		})
		.error(function(error) {
			console.log(erro);
			$scope.message = "Unable to get the picture"; 
		});
	} 

	$scope.submit  = function() {	
		if($scope.new_picture.$valid) {
			if($scope.picture._id) {
				$http.put('v1/fotos/' + $scope.picture._id, $scope.picture)
				.success(function() {
					$scope.message = "Picture updated successfully";
				})
				.error(function(error) {
					console.log(error);
					$scope.message = "Unable to update the picture"; 
				});
			}
			else {				
				$http.post("v1/fotos", $scope.picture)
				.success(function () {
					cleanData();
					$scope.message = "Picture inserted successfully";
				})
				.error(function (error) {
					$scope.message = "Error inserting photo";
				});			
			}
		}				
	};
	// Functions - private scope
	function cleanData() {
		$scope.picture.titulo = " ";
		$scope.picture.url    = " ";
		$scope.picture.descricao = " ";
	};
});   