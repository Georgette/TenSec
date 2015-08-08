angular.module("app", [])
    .controller("HostListController", function($scope, $http) {
        console.log('controller init')
        $http.get('/download/request?host=2').then(function(response){
            $scope.hostList = response.data.configurations
        }, function(response) {
            console.error('server responded with error: ', response)
        })
});
