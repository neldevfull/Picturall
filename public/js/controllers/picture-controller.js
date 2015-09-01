angular.module('picturall').controller('PictureController', function($scope, $http) {
	$scope.picture = {};
	$scope.message = "";

	$scope.submit  = function() {	
		if($scope.new_picture.$valid) {
			$http.post("v1/fotos", $scope.picture)
			.success(function () {
				cleanData();
				$scope.message = "Picture inserted successfully";
			})
			.error(function (error) {
				$scope.message = "Error inserting photo";
			});			
		}				
	};
	// Functions - private scope
	function cleanData() {
		$scope.picture.titulo = " ";
		$scope.picture.url    = " ";
		$scope.picture.descricao = " ";
	}
});   