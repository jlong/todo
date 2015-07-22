(function() {
  'use strict';

  angular
    .module('todo')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController($scope) {
    $scope.newTask = { complete: false };

    $scope.tasks = [
      { text: 'Add a task', complete: false },
      { text: 'Mark task as done', complete: false },
      { text: 'Remove a task', complete: false },
      { text: 'Persist tasks for each user using an appropriate form of browser storage', complete: false },
      { text: 'Reorder tasks', complete: false },
      { text: 'Create multiple lists of tasks', complete: false },
      { text: 'Add due dates for tasks', complete: false },
      { text: 'See a "Today view" with top tasks from each list and overdue tasks', complete: false },
    ];

    $scope.resetTask = function() {
      $scope.newTask = { complete: false };
    };

    $scope.addTask = function(task) {
      $scope.tasks.push(task);
      $scope.resetTask();
    };

    $scope.completeTask = function(task) {
      task.complete = true;
    };

    $scope.removeTask = function(task) {
      var index = $scope.tasks.indexOf(task);
      if (index > -1) { $scope.tasks.splice(index, 1); }
    };

    $scope.resetTask();
  }
})();
