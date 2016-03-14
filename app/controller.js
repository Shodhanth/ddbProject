var app = angular.module('ddbproj', []);

//index.html
app.controller('sqlController',function($scope, $http){

	 $http({
        method : "GET",
        url : "api/auth"
    }).then(function mySucces(response) {
    	console.log('from success function');
        $scope.authentication = response.data;
    }, function myError(response) {
        $scope.authentication = response.statusText;
    });

});

//file.html
app.controller('fileController',function($scope, $http){

	 $http({
        method : "GET",
        url : "api/file"
    }).then(function mySucces(response) {
    	console.log('from success function');
        $scope.file = response.data;
    }, function myError(response) {
        $scope.file = response.statusText;
    });

});

//pariticipants.html
app.controller('partController',function($scope, $http){

	 $http({
        method : "GET",
        url : "api/participants"
    }).then(function mySucces(response) {
    	console.log('from success function');
        $scope.participants = response.data;
    }, function myError(response) {
        $scope.participants = response.statusText;
    });

});

//zip.html
app.controller('zipController',function($scope, $http){

	 $http({
        method : "GET",
        url : "api/zip"
    }).then(function mySucces(response) {
    	console.log('from success function');
        $scope.zip = response.data;
    }, function myError(response) {
        $scope.zip = response.statusText;
    });

});
