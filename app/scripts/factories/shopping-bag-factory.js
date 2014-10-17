/*
---
name: ShoppingBagFactory
...
*/
(function (global, doc, undefined) {

  'use strict';

	var ShoppingBagFactory = function() {

		var ShoppingBagFactory = {};

		ShoppingBagFactory.getItems = function() {
			return ShoppingBagFactory.items;
		};

		ShoppingBagFactory.getItem = function(id) {
			for(var i = 0, l = ShoppingBagFactory.items.length; i<l; i++){
				if(ShoppingBagFactory.items[i].uid === id){
					return ShoppingBagFactory.items[i];
				}
			}
			return null;
		};

		ShoppingBagFactory.addItem = function(item) {
			ShoppingBagFactory.items.push(item);
		};

		ShoppingBagFactory.removeItem = function(id) {
			var _isItemPresent = ShoppingBagFactory.getItem(id);
			if(_isItemPresent){
				ShoppingBagFactory.items.splice(ShoppingBagFactory.items.indexOf(_isItemPresent), 1);
			}
		};

		ShoppingBagFactory.items = [];

		return ShoppingBagFactory;

	};

	angular.module('myApp').factory('ShoppingBagFactory', [ShoppingBagFactory]);

})(window, document);