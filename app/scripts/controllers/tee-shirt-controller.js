/*
---
name: TeeShirtController
...
*/
(function(global, doc, undefined){

	'use strict';

	var TeeShirtController = function($scope, $routeParams, $timeout, TeesFactory, ShoppingBagFactory) {

		/*
		 * Request Handlers
		 */
		var _onRequestSuccess = function() {
			_hideLoader(300);
			_initTeeShirt();
		};

		var _onRequestError = angular.bind(this, function(status) {
			this.errorMessage = 'Datas fetch error (code error: ' + status + ')';
			_hideLoader(0);
		});

		var _initTeeShirt = angular.bind(this, function() {
			this.teeShirt = TeesFactory.getTee(this.teeShirtId);
		});

		var _init = function() {
			if(TeesFactory.tees.length){
				_initTeeShirt();
				_hideLoader(0);
			}else {
				TeesFactory.getTees().error(_onRequestError).then(_onRequestSuccess);
			}
		};

		/*
		 * UX, this avoid a flashing loading overlay
         */
		var _hideLoader = function(timeout) {
			$timeout(function() {
				$scope.hideLoader = true;
			}, timeout);
		};

		this.addItem = function(item, size, color) {
			ShoppingBagFactory.addItem({
				image: item.image,
				name: item.name,
				text: item.text,
				price: item.price,
				uid: item.uid,
				size: size,
				color: color
			});
		};

		// get current tee shirt ID
		this.teeShirtId = parseInt($routeParams.teeShirtId);

		// get optional params
		this.sizeChoice = $routeParams.teeShirtSize;
		this.colorChoice = $routeParams.teeShirtColor;

		// set default model values
		this.hideLoader = false;
		this.errorMessage = false;
		this.teeShirt = {};
		
		_init();

	};

	angular.module('myApp').controller('TeeShirtController', ['$scope','$routeParams', '$timeout', 'TeesFactory', 'ShoppingBagFactory', TeeShirtController]);

})(window, document);

