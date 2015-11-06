(function() {
  'use strict';

angular
  .module('NourritureServices', ['ngResource'])
  .factory('UserService', UserService);

  UserService.$inject = ["$log", "$resource", "URL_API"];

  /** @ngInject */
  function UserService($log, $resource, URL_API) {

    var service = {
      Users : rootEndpointUsers
    };

    function rootEndpointUsers() {
      return $resource(URL_API + '/api/users/');
    }

    return service;

  }
})();
