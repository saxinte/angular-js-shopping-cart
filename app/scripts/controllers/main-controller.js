/*
---
name: MainController
...
*/
(function(global, doc, undefined){

	'use strict';

	var MainController = function($rootScope, $timeout) {

		$rootScope.$on('loadStart', angular.bind(this, function (event, data) {
			this.isLoading = true;
		}));

		$rootScope.$on('loadComplete', angular.bind(this, function (event, data) {
			$timeout(angular.bind(this, function() {
				this.isLoading = false;
			}), 250); // avoid a flashing overlay
			
		}));

	};

	angular.module('myApp').controller('MainController', ['$rootScope', '$timeout', MainController]);

})(window, document);

