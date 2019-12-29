define([], function($scope){

    function loginCtrl($scope){
      $scope.loginCredentials = {};
      $scope.login = function(){
        console.log("login");
      }
    }
    return loginCtrl;

});
