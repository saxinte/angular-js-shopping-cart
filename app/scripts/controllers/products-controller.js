/*
---
name: ProductsController
...
*/
(function(global, doc, undefined){

	'use strict';

	var ProductsController = function($scope, $timeout, SelectorsFactory, TeesFactory) {

		/*
		 * Request Handlers
		 */
		var _onRequestSuccess = function() {
			_hideLoader(300);
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

			if(TeesFactory.tees.length){
				_updateModels();
				_hideLoader(0);
			}else {
				TeesFactory.getTees().error(_onRequestError).then(_onRequestSuccess);
			}

		};

		var _updateModels = angular.bind(this, function() {
			this.tees = TeesFactory.tees;
			this.teeSizes = TeesFactory.getSizes();
		});

		// default models value
		this.sizeFilter = SelectorsFactory.getElement('#all-sizes').value;
		$scope.defaultSizeText = this.sizeFilter; // is it allowed?

		this.tees = [];
		this.teeSizes = [];
		this.errorMessage = false;
		this.hideLoader = false;

		_init();

	};

	angular.module('myApp').controller('ProductsController', ['$scope','$timeout', 'SelectorsFactory', 'TeesFactory', ProductsController]);

})(window, document);

