angular.module('myDirectives', [])
.directive('myPanel', function(){
	var ddo = {};

	ddo.restrict   = 'AE';
	ddo.transclude = true; 

	ddo.scope = {
		title: '@',
		url: '@img'
	}

	ddo.templateUrl = "js/directives/my-panel.html"  

	return ddo;
}); 