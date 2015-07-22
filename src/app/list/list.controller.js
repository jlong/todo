(function() {
  'use strict';

  angular
    .module('todo')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController($scope, Lists) {
    $scope.newTask = { complete: false };

    var list = Lists.get(1);

    if (!list) {
      list = Lists.create({
        tasks: [
          { text: 'Add a task', complete: false },
          { text: 'Mark task as done', complete: false },
          { text: 'Remove a task', complete: false },
          { text: 'Persist tasks for each user using an appropriate form of browser storage', complete: false },
          { text: 'Reorder tasks', complete: false },
          { text: 'Create multiple lists of tasks', complete: false }
        ]
      });
      list.save();
    }

    $scope.tasks = list.tasks;

    $scope.resetTask = function() {
      $scope.newTask = { complete: false };
    };

    $scope.addTask = function(task) {
      list.tasks.push(task);
      list.save();
      $scope.resetTask();
    };

    $scope.completeTask = function(task) {
      task.complete = true;
      list.save();
    };

    $scope.removeTask = function(task) {
      var index = $scope.tasks.indexOf(task);
      if (index > -1) { $scope.tasks.splice(index, 1); }
      list.save();
    };

    $scope.resetTask();
  }
})();
