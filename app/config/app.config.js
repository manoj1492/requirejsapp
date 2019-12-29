define([],function($routeProvider){
    'use strict';

    function config($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'views/home.html', controller: 'appCtrl'})
            .otherwise({redirectTo: '/home'});
    }

    return config;
});
