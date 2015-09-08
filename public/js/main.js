picturall = angular.module('picturall', ['myDirectives', 'ngAnimate', 'ngRoute', 'myServices']);

// config routes
picturall.config(function($routeProvider, $locationProvider) {
	// Use History API
	$locationProvider.html5Mode(true);
	// Create main route
	$routeProvider.when('/', {
		templateUrl: 'partials/main.html',
		controller:  'PicturesController'
	})
	// Create route root
	.when('/pictures', {
		templateUrl: 'partials/main.html', 
		controller:  'PicturesController'
	})
	// Create route to record photos
	.when('/pictures/new', {
		templateUrl: 'partials/picture.html',
		controller:  'PictureController'
	})
	.when('/pictures/edit/:pictureId', {
		templateUrl: 'partials/picture.html',
		controller: 'PictureController'
	})
	// Create route to inconsistent urls 
	.when('/errors', {
		templateUrl: 'partials/error404.html',
		controller:  'PicturesController'
	})
	// Load page errors
	.otherwise({ redirectTo: '/errors' });
});
 