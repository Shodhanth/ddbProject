var app = angular.module('ddbproj');

app.controller('postController', function($scope,$http){



	$scope.addauth = function (data){
		var values = {
			USERNAME: data.username,
			EMAIL_ID: data.email,
			PASSWORD: data.password
		};

		console.log(values);

		$http.post('/api/post/auth', values).then(function(){
		alert('Entry added');
		});

	};
/*
	$scope.addpart = function (data){
		var values = {
			IP_ADD: "",
			MAC_ADD: "",
			USERNAME: "",
			STORAGE_SPACE: ,
			LOCATION: ""
		};

		$http.post('/api/post/part', values).then(function(){});
	};

	$scope.addzip = function (data){
		var values = {
			NAME: "",
			MD5SUM: MD5(""),
			USERNAME: ""
		};

		$http.post('/api/post/zip', values).then(function(){});
	};

	$scope.addfile = function (data){
		var values = {
			USERNAME: "",
			KEY_PUBLIC: SHA1(''),
			KEY_PRIVATE: SHA1(''),
			FILE_NAME: "",
			FILE_TYPE: "",
			FRAGMENTS_NUMBER: ,
			MD5SUM: MD5(''),
			FILE_SIZE:
		};

		$http.post('/api/post/file', values).then(function(){});	
	};*/
});