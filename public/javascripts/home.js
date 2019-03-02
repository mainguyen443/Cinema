let app = angular.module('Cinema', [])

app.controller('listMovieController', function ($scope, $http) {
    
   
    $http.get('/api/v1/movie').then(function (res) {
        $scope.listMovie= res.data.listMovie
        console.log(res)
    })        
       
});