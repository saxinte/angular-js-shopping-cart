/*
---
name: TeesFactory
...
*/
(function (global, doc, undefined) {

  'use strict';

	var TeesFactory = function($rootScope, $q, HttpService) {

		var TeesFactory = {};

		/*
		 * Private Functions
		 */
		function _request() {

			var _deferred = $q.defer();
			_promise = _deferred.promise;

			$rootScope.$emit('loadStart');

			HttpService.newRequest({
				method: 'GET',
				url: 'datas/product-datas.js',
			}).success(function(datas) {
				TeesFactory.tees = datas;
				_deferred.resolve(TeesFactory.tees);
			}).finally(function() {
				$rootScope.$emit('loadComplete');
			});

			return _deferred.promise;

		};

		/*
		 * Getters
		 */
		TeesFactory.getTees = function(url) {
			// return a promise with datas: if tee shirts were fetched previously we return the array immediately,
			// if tee shirts are currently fetched but not yet loaded, we return the promise (this avoid multiple requests),
			// otherwise, we wait for the request result
			return $q.when( TeesFactory.tees || _promise || _request() ); 
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

		/*
		 * Private vars
		 */
		var _promise = null;

		/*
		 * Public vars
		 */
		TeesFactory.tees = null;

		return TeesFactory;

	};

	angular.module('myApp').factory('TeesFactory', ['$rootScope', '$q','HttpService', TeesFactory]);

})(window, document);