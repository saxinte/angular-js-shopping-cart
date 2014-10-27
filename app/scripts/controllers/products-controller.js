/*
---
name: ProductsController
...
*/
(function(global, doc, undefined){

	'use strict';

	var ProductsController = function($scope, SelectorsFactory, TeesFactory) {

		/*
		 * Request Handlers
		 */
		var _onRequestSuccess = angular.bind(this, function() {
			this.tees = TeesFactory.tees;
			this.teeSizes = TeesFactory.getSizes();
		});

		var _onRequestError = angular.bind(this, function(status) {
			this.errorMessage = 'Datas fetch error (code error: ' + status + ')';
		});

		/*
		 * Initialization
		 */
		var _init = function() {
			TeesFactory.getTees().then(_onRequestSuccess, _onRequestError);
		};

		// default models value
		this.sizeFilter = SelectorsFactory.getElement('#all-sizes').value;
		this.priceFilter = SelectorsFactory.getElement('#all-prices').value;

		$scope.defaultSize = this.sizeFilter; // is it allowed?
		$scope.defaultPrice = this.priceFilter; // is it allowed?

		this.tees = [];
		this.teeSizes = [];
		this.errorMessage = false;

		_init();

	};

	angular.module('myApp').controller('ProductsController', ['$scope', 'SelectorsFactory', 'TeesFactory', ProductsController]);


})(window, document);

