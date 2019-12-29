require.config({
	baseUrl: 'lib',
	paths:{
//relative to baseUrl
//needed to specify location of a group of scripts other than third party libraries
    app: '../'
	},
  shim:{
    // loads dependencies according to sequence
    /*'mainModule':{
      deps: ['route'],
      exports: 'modules/app.module'
    },
    'route': {
            //These script dependencies should be loaded before loading
            //angular-route.min.js
            deps: ['angular'],
            //Once loaded, use the global 'route' as the
            //module value.
            exports: 'angular-route.min'
    },
    'angular': {
        deps: ['jquery'],
        exports: 'angular.min'
    },
    'jquery':{
      exports:'jquery.min'
    } */
  }
});

//Start the main app
require(["app/modules/app.module"],
function(){
  angular.bootstrap(document, ['myApp']);
});
