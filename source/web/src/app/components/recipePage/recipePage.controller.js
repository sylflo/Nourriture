(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('RecipePageController', RecipePageController);

RecipePageController.$inject = ["$scope", "toastr", "$log", "RecipeService", "UserService", "$stateParams", "$state",
"$localStorage", "$sessionStorage"];

function RecipePageController($scope, toastr, $log, RecipeService, UserService, $stateParams, $state,
                              $localStorage, $sessionStorage)
{
	var vm = this;

	vm.RecipeSuccess = function (data) {
		$log.log(data);
		vm.recipe = data;
	};

	vm.RecipeFailure = function (data) {
		$log.log(data.data);
		toastr.error(data, 'Woops...');
	};

	vm.goToIngredientPage = function (id_ingredient) {
		$state.go("main.ingredient-page", {id: id_ingredient});
	};

	RecipeService
		.recipe_id
		.get({"id" : $stateParams.id})
		.$promise
		.then(vm.RecipeSuccess, vm.RecipeFailure);

  vm.SuccessGetUser = function(data) {
    $log.log(data);
    toastr.success("We got user", 'Woops...');
  };

  vm.FailureGetUser = function() {
    toastr.error("Error getting user", 'Woops...');
  };

  vm.addToLikedUserRecipes = function() {

    UserService
      .user_get_id
      .get({"id": $localStorage.user_id || $sessionStorage.user_id})
      .$promise
      .then(vm.SuccessGetUser, vm.FailureGetUser);

  }
}

})();
