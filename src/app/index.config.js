(function() {
  'use strict';

  angular
    .module('todo')
    .config(config);

  /** @ngInject */
  function config($logProvider, localStorageServiceProvider) {

    $logProvider.debugEnabled(true);

    localStorageServiceProvider.setPrefix('todo');

  }

})();
