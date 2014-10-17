/*
---
name: TeesFactory
...
*/
(function (global, doc, undefined) {

  'use strict';

	var TeesFactory = function(HttpService) {

		var TeesFactory = {};

		/*
		 * Getters
		 */
		TeesFactory.getTees = function(url) {
			return HttpService.newRequest({
				method: 'GET',
				url: 'datas/product-datas.js',
			}).success(function(datas) {
				TeesFactory.tees = datas;
			});
		};

		TeesFactory.getTee = function(id) {
			for(var i = 0, l = TeesFactory.tees.length; i<l; i++){
				if(TeesFactory.tees[i].uid === id){
					return TeesFactory.tees[i];
				}
			}
			return null;
		};

		TeesFactory.getSizes = function() {
			var _filtered = [];
			angular.forEach(TeesFactory.tees, function(tee) {
				angular.forEach(tee.sizes, function(size) {
					if(_filtered.indexOf(size) === -1){
						_filtered.push(size);
					}
				});
			});
			return _filtered;
		};

		TeesFactory.getColors = function() {
			var _filtered = [];
			angular.forEach(TeesFactory.tees, function(tee) {
				angular.forEach(tee.colors, function(color) {
					if(_filtered.indexOf(color) === -1){
						_filtered.push(color);
					}
				});
			});
			return _filtered;
		};

		TeesFactory.tees = [];

		return TeesFactory;

	};

	angular.module('myApp').factory('TeesFactory', ['HttpService', TeesFactory]);

})(window, document);