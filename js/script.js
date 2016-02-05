'use strict';

console.log('link : script.js');

angular.module('simplonApp', [])
.controller('SimplonController', SimplonController);

function SimplonController($scope){
	$scope.tasks = [
	{text:'Comprendre le pattern MVC', isDone:true},
	{text:'Faire le tuto Angular', isDone:false},
	{text:'Se préparer à la Master Class', isDone:false}
	];
	$scope.remain;

	$scope.remaining = function(){
		var count = 0;
		angular.forEach($scope.tasks, function(task){
			count += task.isDone ? 0 : 1;
		});
		return count;
	}
	$scope.update = function(){
		$scope.remain = $scope.remaining();
	}
	$scope.remain = $scope.remaining();
}