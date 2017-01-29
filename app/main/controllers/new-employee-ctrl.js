'use strict';
angular.module('main')
    .controller('NewEmployeeCtrl', function($scope) {
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

        $scope.selectedDept = $scope.departments[0];
    });