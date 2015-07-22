(function() {
  'use strict';

  angular
      .module('todo')
      .service('Lists', Lists);

  /** @ngInject */
  function Lists(localStorageService) {
    var ls = localStorageService
    ,   lastListId = ls.get('last_list_id') || 0
    ,   lists = ls.get('lists') || []
    ;

    this.all = lists;

    var newId = function() {
      ls.set('last_list_id', lastListId++);
      return lastListId;
    };

    function List(bareObject) {
      this.id = bareObject.id;
      this.tasks = bareObject.tasks || [];
      console.log('tasks', this.tasks);
    }

    List.prototype.toBareObject = function() {
      return {
        id: this.id,
        tasks: this.tasks
      };
    };

    List.prototype.save = function() {
      if (!this.id) {
        this.id = newId();
        console.log('saving', this.toBareObject());
        lists.push(this.toBareObject());
      }
      ls.set('lists', lists);
    };

    this.create = function(bareObject) {
      return new List(bareObject);
    };

    this.get = function(id) {
      var found;
      for (var i = 0; i < lists.length; i++) {
        var list = lists[i];
        if (list.id === id) {
          found = list;
          console.log('found', found);
          break;
        }
      }
      if (found) {
        return new List(found);
      }
    };
  }
})();
