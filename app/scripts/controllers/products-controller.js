/*
---
name: ProductsController
...
*/
(function(global, doc, undefined){

	'use strict';

	var ProductsController = function($scope, $q, $timeout, SelectorsFactory, TeesFactory) {

		/*
		 * Request Handlers
		 */
		var _onRequestSuccess = function() {
			_hideLoader(250);
			_updateModels();
		};

		var _onRequestError = angular.bind(this, function(status) {
			this.errorMessage = 'Datas fetch error (code error: ' + status + ')';
			_hideLoader(0);
		});

		/*
		 * UX, this avoid a flashing loading overlay
         */
		var _hideLoader = function(timeout) {
			$timeout(function() {
				$scope.hideLoader = true;
			}, timeout);
		};

		/*
		 * Initialization
		 */
		var _init = function() {
			TeesFactory.getTees().then(_onRequestSuccess, _onRequestError);
		};

		var _updateModels = angular.bind(this, function() {
			this.tees = TeesFactory.tees;
			this.teeSizes = TeesFactory.getSizes();
		});

		// default models value
		this.sizeFilter = SelectorsFactory.getElement('#all-sizes').value;
		this.priceFilter = SelectorsFactory.getElement('#all-prices').value;

		$scope.defaultSize = this.sizeFilter; // is it allowed?
		$scope.defaultPrice = this.priceFilter; // is it allowed?

		this.tees = [];
		this.teeSizes = [];
		this.errorMessage = false;
		this.hideLoader = false;

		_init();

	};

	angular.module('myApp').controller('ProductsController', ['$scope','$q','$timeout', 'SelectorsFactory', 'TeesFactory', ProductsController]);

})(window, document);

