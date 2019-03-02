// import { release } from "os";

let app = angular.module('Cinema', [])

app.controller('createMovieController', function ($scope, $http) {

    $scope.items = [{
        name: 'Cartoon'
      }, {
        name: "Present"
      }, {
        name: "Action"
      }, {
        name: "Romantic"
      }, {
        name: "Horror"
      }, {
        name: "Comedy"
      }];
    $scope.genre = $scope.items[0];
    
    $scope.createMovie = function () {
        let data = {
            name: $scope.movieName,
            description: $scope.description,
            genre : $scope.genre.name,
            releaseTime: $('#datepicker').datepicker('getDate').getTime()
        }

        $http.post('/api/v1/movie/create', data).then(function (res) {
            console.log(res)
        })
    }
});



