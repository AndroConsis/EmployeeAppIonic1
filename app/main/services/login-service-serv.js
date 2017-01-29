'use strict';
angular.module('main')
    .service('LoginService', function($q, Constants) {
        var loginService = {
            loginUser: loginUser,
            logoutUser: logoutUser
        };

        /**
         * Resolves promise if Username & Password matches
         */
        function loginUser(uname, pass) {
            var deferred = $q.defer();
            if (uname === Constants.LOGIN_CREDENTIALS.DEFAULT_USERNAME && pass === Constants.LOGIN_CREDENTIALS.DEFAULT_PASSWORD) {
                deferred.resolve();
            } else {
                deferred.reject();
            }

            return deferred.promise;
        }

        function logoutUser() {

        }

        return loginService;
    });