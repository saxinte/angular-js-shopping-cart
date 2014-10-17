/*
---
name: $HttpService
...
*/
(function (global, doc, undefined) {

  'use strict';

	var HttpService = function($http) {

		this.newRequest = function(params) {
			return $http(params);
		};

	};

	angular.module('myApp').service('HttpService', ['$http', HttpService]);

})(window, document);