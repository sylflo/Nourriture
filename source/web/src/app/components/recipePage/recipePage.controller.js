(function () {
  'use strict';

  angular.module('NourritureControllers')
    .controller('RecipePageController', RecipePageController);

  RecipePageController.$inject = ["$scope", "toastr", "$log", "RecipeService", "UserService", "$stateParams", "$state",
    "$localStorage", "$sessionStorage"];

  function RecipePageController($scope, toastr, $log, RecipeService, UserService, $stateParams, $state,
                                $localStorage, $sessionStorage) {
    var vm = this;

    vm.updateUserRecipeLikeSuccess = function () {
      toastr.success('Recipe added to your like :)', 'Success');
    };

    vm.updateUserRecipeLikeError = function (data) {
      $log.log(data);
      toastr.error('Error updating user liked recipe', 'Woops...');
    };

    vm.SuccessGetUser = function(data) {

      $log.log("recipe like in USER = ", data.recipe_like);

      vm.recipe_like = data.recipe_like;
      vm.recipe_like.push({"id_recipe": vm.recipe._id, "name_recipe": vm.recipe.title});

      UserService
        .update_user
        .update({id: $localStorage.user_id || $sessionStorage.user_id}, {
          recipe_like: vm.recipe_like
        })
        .$promise
        .then(vm.updateUserRecipeLikeSuccess, vm.updateUserRecipeLikeError);
    };

    vm.FailureGetUser = function() {
      toastr.error('Error getting user', 'Woops...');
    };

    vm.RecipeSuccess = function (data) {
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
      .get({"id": $stateParams.id})
      .$promise
      .then(vm.RecipeSuccess, vm.RecipeFailure);


    vm.addToLikedUserRecipes = function () {

      UserService
        .user_get_id
        .get({"id": $localStorage.user_id || $sessionStorage.user_id})
        .$promise
        .then(vm.SuccessGetUser, vm.FailureGetUser);

    }
  }

})();
