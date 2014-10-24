/*
---
name: SelectorsFactory
...
*/
(function (global, doc, undefined) {

  'use strict';

	var SelectorsFactory = function() {
		
		function _convertNodeListToArray(nodelist) {
			var array = [];
			for( var i = nodelist.length; i--; array.unshift( nodelist[i]) );
			return array;
		}

		var SelectorsFactory = {};

		SelectorsFactory.getElement = function(selector) {
			return doc.querySelector(selector);
		};

		SelectorsFactory.getElements = function(selectors) {
			return _convertNodeListToArray( doc.querySelectorAll(selectors) );
		};

		return SelectorsFactory;

	};

	angular.module('myApp').factory('SelectorsFactory', SelectorsFactory);

})(window, document);