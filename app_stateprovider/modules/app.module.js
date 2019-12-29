define(['app/config/app.config',
        'app/controllers/app.controller',
        'app/controllers/header.controller',
        'app/controllers/footer.controller',
        'app/controllers/login.controller',
        //'app/services/app.service'
       ],
    function(config,appCtrl,headerCtrl,footerCtrl,loginCtrl){//, appSvc, appCtrl){
    'use strict';

    var app = angular.module('myApp',['ngRoute','ui.router']);

    app.config(config);
    app.controller('appCtrl', appCtrl);
    app.controller('headerCtrl', headerCtrl);
    app.controller('footerCtrl', footerCtrl);
    app.controller('loginCtrl', loginCtrl);
    app.run(function($state) {
      $state.go('home');
    });
    //app.factory('appSvc',appSvc);
});
