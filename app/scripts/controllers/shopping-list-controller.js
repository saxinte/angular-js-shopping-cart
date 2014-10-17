/*
---
name: ShoppingListController
...
*/
(function(global, doc, undefined){

	'use strict';

	var ShoppingListController = function(ShoppingBagFactory) {

		// methods
		this.removeItem = ShoppingBagFactory.removeItem;

		// default models value
		this.items = ShoppingBagFactory.getItems();

	};

	angular.module('myApp').controller('ShoppingListController', ['ShoppingBagFactory', ShoppingListController]);

})(window, document);

