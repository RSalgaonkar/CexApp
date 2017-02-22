'use strict';

/**
 * @ngdoc function
 * @name cexApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cexApp
 */
angular.module('cexApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.title = "CEX CART";
  	$scope.selectedQty = {price: 1};
  	$scope.options = [{ value: 1, id: 1 }, { value: 2, id: 2 }, { value: 3, id: 3 }];
  	$scope.selectedOption = $scope.options[1];

  	$scope.itemList = [{
  		id: 1,
  		name: "Samsung Galaxy Note: 16gb",
  		description: "Samsung helps you discover a wide range of technologymore",
  		image: "images/farmer.png",
  		price: 130,
  		color: "Red",
  		qty: 2,
  		shipping: 10,
  		discount: 10
  	},{
  		id: 2,
  		name: "Nokia",
  		description: "Nokia Corporation, is a Finnish multinational communications and information technology company",
  		image: "images/farmer.png",
  		price: 150,
  		color: "Grey",
  		qty: 1,
  		shipping: 10,
  		discount: 10
  	}];

  	$scope.itemPriceTotal = function (item) {
  		var total = parseFloat(item.qty * item.price);
  		return total;
  	};

  	$scope.changeQty = function	(item) {
  		for (var i=0; i < $scope.itemList.length; i++) {
  			if ($scope.itemList[i].id === item.id) {
  				$scope.itemList[i].qty = item.qty;
  				return;
  			}
  		}
  	};

  	$scope.orderTotal = function () {
  		var orderTotal = 0;
  		for (var i=0; i < $scope.itemList.length; i++) {
  			var itemTotal = parseFloat($scope.itemList[i].qty * $scope.itemList[i].price);
  			var itemShippingTotal = parseFloat(itemTotal + $scope.itemList[i].shipping + $scope.itemList[i].discount);
  			orderTotal = parseFloat(orderTotal + itemShippingTotal);
  		}

  		return orderTotal;
  	};

  	$scope.orderEstimatedTotal = function (item) {
  		var orderTotal = 0;
  		var itemTotal = parseFloat(item.qty * item.price);
			var itemShippingTotal = parseFloat(itemTotal + item.shipping - item.discount);
			orderTotal = parseFloat(orderTotal + itemShippingTotal);
			return orderTotal;
  	};

  	$scope.showModalBilling = function() {
  		$("#billingInfo").modal('show');
  	};

  	$scope.showModalshippingAddress = function() {
  		$("#shippingAddress").modal('show');
  	};

  	$scope.showModalPaymentMethod = function() {
  		$("#paymentMethod").modal('show');
  	};

  	$scope.showModalOrderReview = function() {
  		$("#orderReview").modal("show");
  	};

  	$scope.showModalRequestForm = function() {
  		$("#requestForm").modal("show");
  	};

  	// $scope.goToCheckout = function () {
  	// 	$state.go("checkout");
  	// };
  });

