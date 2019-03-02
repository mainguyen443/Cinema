let app = angular.module('Cinema', [])

app.controller('signUpController', function ($scope, $http) {
    
    $scope.userSignUp = function () {
        let data = {
            userName: $scope.userName,
            email: $scope.email,
            password : $scope.password,
        }

        $http.post('/api/v1/user/signup', data).then(function (res) {

            setCookie("USERNAME", res.data.userName)
            window.alert('Sign up successfully')
            window.location.href = '/'
        })
    }
});