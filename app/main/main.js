'use strict';
angular.module('main', [
        'ionic',
        'ngCordova',
        'ui.router',
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
                        // controller: '<someCtrl> as ctrl'
                    }
                }
            });
    });