angular.module('myDirectives', [])
.directive('myPanel', function() {
	var ddo = {};

	ddo.restrict   = 'AE';
	ddo.transclude = true; 

	ddo.scope = {
		title: '@',
		// url: '@img'
	}

	ddo.templateUrl = "js/directives/my-panel.html";  

	return ddo;
})
.directive('myPicture', function() {
	var ddo = {};

	ddo.restrict   = "E";
	
	ddo.scope = {
		title:'@',
		url:  '@img'
	}

	ddo.templateUrl = "js/directives/my-picture.html";

	return ddo;
});