'use strict';
angular.module('main')
    .controller('ListCtrl', function($scope, $state, $ionicViewSwitcher) {
        $scope.init = init;

        $scope.addNewEmployee = addNewEmployee;

        function init() {
            $scope.employees = [];
        }

        function addNewEmployee() {
            $ionicViewSwitcher.nextDirection('forward');
            $state.go('add-new-employee');
        }
    });