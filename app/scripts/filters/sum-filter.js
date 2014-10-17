/*
---
name: SumFilter
...
*/
(function (global, doc, undefined) {

	'use strict';

	var SumFilter = function() {
		return function(array, filter) {
			if(!filter){
				return array.reduce(function(prev, current) {
					return prev + current;
				},0)
			}else {
				return array.reduce(function(prev, current) {
					return prev + current[filter];
				}, 0);
			}
		}
	};

	angular.module('myApp').filter('SumFilter', SumFilter);

})(window, document);