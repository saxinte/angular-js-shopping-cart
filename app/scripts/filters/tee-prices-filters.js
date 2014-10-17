/*
---
name: TeePricesFilter
...
*/
(function (global, doc, undefined) {

	'use strict';

	var TeePricesFilter = function() {
		return function(tees, prices) {

			var filtered = [];

			if(prices === this.defaultPrice){ // is it allowed?
				return tees;
			}

			filtered = tees.filter(function(tee) {
				if(prices.length === 1){
					return tee.price >= prices[0];
				}else {
					return (tee.price >= prices[0]) && (tee.price < prices[1]);
				}
			});

			return filtered;

		};
	};

	angular.module('myApp').filter('TeePricesFilter', TeePricesFilter);

})(window, document);