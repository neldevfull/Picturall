angular.module('myServices', ['ngResource'])
.factory('resourcePic', function($resource) {
	return $resource('v1/fotos/:pictureId', null, {
		update: {
			method: 'PUT'
		}
	});
});