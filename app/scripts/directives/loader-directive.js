/*
---
name: loaderDirective
...
*/
(function (global, doc, undefined) {

  'use strict';

	var loaderDirective = function() {
		return {
			restrict: 'E',
			replace: true,
			scope: {
				isloading: '@'
			},
			template:'<div class="is-loading" ng-show="isloading"></div>',
		}
	};

	angular.module('myApp').directive('loaderDirective', loaderDirective);

})(window, document);