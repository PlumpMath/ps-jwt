'use strict';

angular
    .module('psJwtApp').config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('main', {
            url: '/'
            , templateUrl: '/views/main.html'
        });

        $stateProvider.state('register', {
            url: '/register'
            , templateUrl: '/views/register.html'
            , controller: 'RegisterCtrl'
            , controllerAs: 'vm'
        });

        $stateProvider.state('logout', {
            url: '/logout'
            , controller: 'LogoutCtrl'
            , controllerAs: 'vm'
        });

        $stateProvider.state('jobs', {
            url: '/jobs'
            , templateUrl: '/views/jobs.html'
            , controller: 'JobsCtrl'
            , controllerAs: 'vm'
        });

    });