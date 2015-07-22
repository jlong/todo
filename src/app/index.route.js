(function() {
  'use strict';

  angular
    .module('todo')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })
      .when('/list/:id', {
        templateUrl: 'app/list/list.html',
        controller: 'ListController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
