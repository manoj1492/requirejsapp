define(['app/config/app.config',
        'app/controllers/app.controller'
        //'app/services/app.service'
       ],
    function(config,appCtrl){//, appSvc, appCtrl){
    'use strict';

    var app = angular.module('myApp',['ngRoute']);

    app.config(config);
    app.controller('appCtrl', appCtrl);
    //app.factory('appSvc',appSvc);
});
