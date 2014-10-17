/*
---
name: TeeSizesFilter
...
*/
(function (global, doc, undefined) {

	'use strict';

	var TeeSizesFilter = function() {
		return function(tees, size) {

			var filtered = [];

			if(size === this.defaultSize){ // is it allowed?
				return tees;
			}

			angular.forEach(tees, function(tee) {
				if(tee.sizes && tee.sizes.indexOf(size) != -1){
					filtered.push(tee);
				}
			});

			return filtered;

		};
	};

	angular.module('myApp').filter('TeeSizesFilter', TeeSizesFilter);

})(window, document);