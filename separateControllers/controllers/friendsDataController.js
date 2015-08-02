// referencing the myApp instance from app.js...notice the lack of []
angular.module('myApp').

// defines a controller named familyDataController
// also utilizes the $scope and $http service
controller('friendsDataController', function($scope, $http){

	// makes a GET request to the server for this file
	$http.get('data/friendsData.json').

	// on a 200(success) response
	success(function(data, status, headers){

		// attach the returned data to the $scope.friends property
		$scope.friends = data;

		// log the response status to the console
		console.log(status);
	})
})