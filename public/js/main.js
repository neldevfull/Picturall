angular.module('picturall', ['myDirectives', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider) {
	// Use History API
	$locationProvider.html5Mode(true);
	// Create main route
	$routeProvider.when('/pictures', {
		templateUrl: 'partials/main.html',
		controller:  'PicturesController'
	});
	// Create main route
	$routeProvider.when('/', {
		templateUrl: 'partials/main.html',
		controller:  'PicturesController'
	});
	// Create route to record photos
	$routeProvider.when('/pictures/new', {
		templateUrl: 'partials/new.html',
		controller:  'PictureController'
	});
	// Create route to inconsistent urls 
	$routeProvider.when('/errors', {
		templateUrl: 'partials/error404.html',
		controller:  'PicturesController'
	});
	// Load page errors
	$routeProvider.otherwise({ redirectTo: '/errors' });
});
