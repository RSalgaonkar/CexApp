'use strict';

/**
 * @ngdoc function
 * @name cexApp.controller:CheckoutCtrl
 * @description
 * # CheckoutCtrl
 * Controller of the cexApp
 */
angular.module('cexApp')
  .controller('CheckOutCtrl', function ($scope, $location) {
  	$scope.profileForm = true;
  	$scope.paymentForm = false;
  	$scope.profileDetails = {
  		name: '',
  		email: '',
  		phone: '',
  		zipcode: '',
  		houseno: '',
  		address: '',
  		landmark: ''
  	}

  	$scope.submitForm = function(isValid) {
	    if (isValid) {
	    	$scope.profileForm = false;
		  	$scope.paymentForm = true;
	    }
	  };

	  $scope.goBack = function () {
	  	$location.path('/main')
	  }

	  $scope.goBackProfilePage = function () {
	  	$scope.profileForm = true;
	  	$scope.paymentForm = false;
	  }
  });
