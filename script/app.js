angular.module("todoApp", [])
    .controller("MainCtrl", function($scope) {
        $scope.todos = [
            {
                text:"Todo 1",
                completed:false
            },
            {
                text:"Todo 2",
                completed:false
            },
            {
                text:"Todo 3",
                completed:false
            }
        ];

        $scope.add = function() {
            $scope.todos.push($scope.newTodo);
            $scope.newTodo = {};
        };

        $scope.delete = function(todoToRemove) {
            var index = $scope.todos.indexOf(todoToRemove);
            $scope.todos.splice(index, 1);
        };

        $scope.clearCompleted = function() {
            for(var i=$scope.todos.length- 1; i>=0; i--) {
                if($scope.todos[i].completed) {
                    $scope.todos.splice(i, 1);
                }
            }
        };

    });