angular.module('myApp', ['ngRoute']);

/*
---
name: RouteConfig
...
*/
(function(global, doc, undefined){

	'use strict';

	var RouteConfig = function($routeProvider) {

		$routeProvider
		.when('/home', {
			templateUrl: 'views/products-view.html',
			controller: 'ProductsController',
			controllerAs: 'Products'
		})
		.when('/tee-shirt/:teeShirtId/:teeShirtSize?/:teeShirtColor?', {
			templateUrl: 'views/tee-shirt-view.html',
			controller: 'TeeShirtController',
			controllerAs: 'Product'
		})
		.when('/shopping-bag', {
			templateUrl: 'views/shopping-list-view.html',
			controller: 'ShoppingListController',
			controllerAs: 'ShoppingList'
		})
		.when('/checkout', {
			templateUrl: 'views/checkout-view.html'
		})
		.otherwise({
			redirectTo: '/home'
		});

	};

	angular.module('myApp').config(['$routeProvider', RouteConfig]);

})(window, document);
