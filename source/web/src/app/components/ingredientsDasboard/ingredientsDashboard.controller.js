(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('IngredientsDashboardController', IngredientsDashboardController);

IngredientsDashboardController.$inject = ["$scope", "IngredientService", 'toastr',"$log"];

function IngredientsDashboardController($scope, IngredientService, toastr, $log)
{
	var vm = this;

	$log.log("innit");

	vm.IngredientsGetSuccess = function (data) {
		$log.log(data);
		vm.ingredients = data;
	};

	vm.IngredientsGetFailure = function (data) {
		$log.log(data.data);
		var errorMsg = "This is odd...";
		if (data.data.errmsg.indexOf("name") > -1)
			errorMsg = "Seems like the ingredient already exists";
		toastr.error(errorMsg, 'Woops...');
	};

	IngredientService
		.ingredients
		.query()
		.$promise
		.then(vm.IngredientsGetSuccess, vm.IngredientsGetFailure);

}

})();