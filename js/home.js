(function (angular) {

    var app = angular.module('app', []);

    angular.module('app')
        .controller('HomeController', HomeController);
    HomeController.$inject = ['$scope', '$http', '$timeout'];

    function HomeController($scope, $http, $timeout) {
        console.log(1)
        $scope.ui = {
            error: {
                show: false,
                message: ''
            }
        };
        $scope.data = {
            email: '',
            password: '',
            remember_me: '',
        };

        $scope.signIn = function () {
            $http.post('/api/log-in.php', $scope.data).then(function (response) {
                if (response.data.success) {
                    window.location.href = response.data.url;
                } else {
                    $scope.ui.error.show = true;
                    $scope.ui.error.message = response.data.error.message
                }
                $timeout(function () {
                    $scope.ui.error.show = false
                }, 4000);
            });
        }
    }


})(angular)