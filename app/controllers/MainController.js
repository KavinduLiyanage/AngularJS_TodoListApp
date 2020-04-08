'use strict';

app.controller('MainController',['$scope',$scope => {

    $scope.list = ['task1','task2','task3'];
    $scope.addItem = () => {
        $scope.list.push($scope.addToDo);
    }
}]);