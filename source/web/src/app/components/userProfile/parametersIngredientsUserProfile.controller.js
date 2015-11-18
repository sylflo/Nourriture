/**
 * Created by sylflo on 11/15/15.
 */

(function () {

  'use strict';

  angular.module('NourritureControllers')
    .controller('ParametersIngredientsUserProfileController', ParametersIngredientsUserProfileController);

  ParametersIngredientsUserProfileController.$inject = ["IngredientService", "$log", '$rootScope', '$timeout'];

  function ParametersIngredientsUserProfileController(IngredientService, $log, $rootScope, $timeout) {
    var vm = this;

    function getUserProfile() {

      vm.data = $rootScope.UserProfile;
      $log.log("INgredient like = ", vm.data);
      $log.log("innit");

      //Vars for Chips
      vm.names_ingredient = [{name: 'test'}, {name: 'tutu'}];
      vm.selectedItemChip = null;
      vm.searchTextChip = null;
      vm.itemsAutocomplete = [];
    }

    //Chips functions
    vm.transformChip = function (chip) {
      $log.log("chip = ", chip);
      if (angular.isObject(chip))
        return chip;
      if (angular.isUndefined(chip._id))
        return {
          name: chip
        };
      else
        return {
          name: chip.name
        }
    };

    vm.getNameIngredients = function (name) {
      $log.log("innit");
      return (IngredientService
        .ingredient_name
        .query({name: name})
        .$promise
        .then(vm.IngredientsGetNameSuccess, vm.IngredientsGetNameFailure));

    };

    vm.IngredientsGetNameFailure = function (data) {
      $log.log(data.data);
      vm.itemsAutocomplete = [];
      return (vm.itemsAutocomplete);
    };

    vm.IngredientsGetNameSuccess = function (data) {
      $log.log(data);
      vm.itemsAutocomplete = data;
      return (vm.itemsAutocomplete);
    };


    //Timeout in ms for the moment
    $timeout(getUserProfile, 1000);


  }

})();