/*
---
name: sizeDirective
...
*/
(function (global, doc, undefined) {

  'use strict';

	var sizeDirective = function() {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'templates/size-list-item.html',
			link: function (scope, element, attr) {
				element.bind('click', function (e) {
					e.preventDefault();
				});
			}
		};
	};

	angular.module('myApp').directive('sizeDirective', sizeDirective);

})(window, document);