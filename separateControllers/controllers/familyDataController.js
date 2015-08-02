// referencing the myApp instance from app.js...notice the lack of []
angular.module('myApp').

// defines a controller named familyDataController
// also utilizes the $scope and $http service
controller('familyDataController', function($scope, $http){

	// makes a GET request the the server for this file
	$http.get('data/familyData.json').

	// on a 200(success) response
	success(function(data, status, headers){

		// attach the returned data to the $scope.family property
		$scope.family = data;

		// log the repsonse status to the console
		console.log(status);
	})
})