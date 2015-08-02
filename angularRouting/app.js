// Init Angular and it's dependencies

var app = angular.module('app', ['ngRoute']);

// Router and it's config
app.config(function($routeProvider){
	$routeProvider

	// Home route
	.when('/home', {
		templateUrl : 'views/home.html',
		controller  : 'homeController'
	})

	// About route
	.when('/about', {
		templateUrl : 'views/about.html',
		controller  : 'aboutController'
	})

	// Contact route
	.when('/contact', {
		templateUrl : 'views/contact.html',
		controller  : 'contactController'
	})
});


// Controllers
app.controller('homeController',function($scope){
	$scope.message = 'Home';
});

app.controller('aboutController',function($scope, $http){
	$scope.message = 'About';
	$http.get('friends.json')
		.success(function(data, error){
			$scope.dataFirstName = data[0].f_name;
		})
		.error(function(data,error){
			console.log(error);
		})
});

app.controller('contactController',function($scope, $http){
	$scope.message = 'Contact';
	$http.get('data.json')
		.success(function(data, error){
			$scope.dataAddress = data[0].address;
			$scope.dataPhone = data[0].phone;
		})
		.error(function(data, error){
			console.log(error);
		})
});