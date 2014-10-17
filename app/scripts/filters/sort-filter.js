/*
---
name: SortFilter
...
*/
(function (global, doc, undefined) {

	'use strict';

	var SortFilter = function() {
		return function(input) {
			return input && input.sort();
		}
	};

	angular.module('myApp').filter('SortFilter', SortFilter);

})(window, document);