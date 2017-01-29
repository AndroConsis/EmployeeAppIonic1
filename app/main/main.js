'use strict';
angular.module('main', [
        'ionic',
        'ngCordova',
        'ui.router',
        'ion-floating-menu'
        // TODO: load other modules selected during generation
    ])
    .config(function($stateProvider, $urlRouterProvider) {

        // ROUTING with ui.router
        $urlRouterProvider.otherwise('/');
        $stateProvider
        // this state is placed in the <ion-nav-view> in the index.html
            .state('login', {
                url: '/',
                templateUrl: 'main/templates/login.html',
                controller: 'LoginCtrl'
            })
            .state('main', {
                url: '/main',
                abstract: true,
                templateUrl: 'main/templates/menu.html',
                controller: 'MenuCtrl'
            })
            .state('main.list', {
                url: '/list',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/list.html',
                        controller: 'ListCtrl'
                    }
                }
            }).state('add-new-employee', {
                url: '/add-new-employee',
                templateUrl: 'main/templates/new-employee.html',
                controller: 'NewEmployeeCtrl'
            });
    });