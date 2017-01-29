'use strict';
angular.module('main')
    .controller('NewEmployeeCtrl', function($scope, $ionicViewSwitcher, $state, DatabaseService) {
        $scope.init = init;
        $scope.saveEmployeeDetails = saveEmployeeDetails;

        function init() {
            $scope.employee = {};

            $scope.departments = [{
                text: 'IT/Software',
                value: 1
            }, {
                text: 'Management Services',
                value: 2
            }, {
                text: 'Human Resources',
                value: 3
            }];

            $scope.employee.dept = $scope.departments[0];
        }

        function saveEmployeeDetails() {
            alert(JSON.stringify($scope.employee));
            DatabaseService.insertRow($scope.employee).then(function() {
                $ionicViewSwitcher.nextDirection('forward');
                $state.go('main.list');
            }, function() {});
        }
    });