'use strict';
angular.module('main')
    .controller('LoginCtrl', function($log, $scope, $state, LoginService) {
        $scope.init = init;
        $scope.login = login;

        /** Initializes the View Context*/
        function init() {
            $scope.user = {};
        }

        /**
         * Represents ng-click login, makes call to Login Service. Locate to main.List is Login successful
         */
        function login() {
            LoginService.loginUser($scope.user.username, $scope.user.password).then(function() {
                $state.go('main.list');
            }, function() {
                $log.log("Login Failed");
            });
        }
    });