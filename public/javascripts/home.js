let app = angular.module('Cinema', [])

app.controller('listMovieController', function ($scope, $http) {
    $scope.isLogin = false
    $scope.username  = getCookie("USERNAME")
   if($scope.username){
       $scope.isLogin = true
   }
    $http.get('/api/v1/movie').then(function (res) {
        $scope.listMovie= res.data.listMovie
    })        
       

});