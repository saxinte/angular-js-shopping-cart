/*
---
name: teeDirective
...
*/
(function (global, doc, undefined) {

  'use strict';

	var teeDirective = function() {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/tee-thumbnail.html'
		};
	};

	angular.module('myApp').directive('teeDirective', teeDirective);

})(window, document);