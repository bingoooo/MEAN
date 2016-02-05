// controller.js
    angular.module('simplonApp', [])
      .controller('SimplonController', function($scope) {
        var todoList = $scope;

        // Tableau qui contient les tâches à réaliser
        todoList.tasks = [
          {text:'comprendre le pattern MVC', isDone:true},
          {text:'faire le tuto sur Angular', isDone:false},
          {text:'Se préparer à la master class', isDone:false},
         ];

        // Fonction qui renvoie le nombre de tâches restantes (qui ne sont pas 'done')
        todoList.remaining = function() {
          var count = 0;
          angular.forEach(todoList.tasks, function(task) {
            count += task.isDone ? 0 : 1;
          });
          return count;
        };
   });