define([],function($routeProvider,$stateProvider){
    'use strict';

    function config($routeProvider,$stateProvider) {
        $routeProvider.when('/home', {templateUrl: 'views/home.html', controller: 'appCtrl'})
            .otherwise({redirectTo: '/home'});
        $stateProvider.state(
          'home', {
            views: {
              'header':{templateUrl: 'views/header.html', controller: 'headerCtrl'},
              'content':{templateUrl: 'views/login.html', controller: 'loginCtrl'},
              'footer':{templateUrl: 'views/footer.html', controller: 'footerCtrl'}
            }
        });

    }

    return config;
});
