let app = angular.module('Cinema', [])

app.controller('logInController', function ($scope, $http) {
    
    $scope.userLogIn = function () {
        let data = {
            email: $scope.email,
            password : $scope.password
        }

        $http.post('/api/v1/user/login', data).then(function (res) {

            if(res.data.user){
                 $scope.user = res.data.user
                 setCookie("USERNAME", $scope.user.userName)
                 window.alert('Log In successfully')
                 window.location.href = '/'
            } 
            else
            {
                window.alert(res.data.message)
            }
            
        })
    }
});