'use strict';
angular.module('main')
    .controller('ListCtrl', function($scope, $state, $ionicViewSwitcher, DatabaseService) {
        $scope.init = init;

        $scope.addNewEmployee = addNewEmployee;

        function init() {
            $scope.employees = [];

            fetchData();
        }

        function fetchData() {
            DatabaseService.getAllRows().then(function(res) {
                $scope.employees = res;
            });
        }

        function addNewEmployee() {
            $ionicViewSwitcher.nextDirection('forward');
            $state.go('add-new-employee');
        }
    });