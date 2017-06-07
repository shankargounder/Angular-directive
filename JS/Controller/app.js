var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl:'template/home.html',
		controller:'HomeController'
	})
	.when('/Home', {
		templateUrl:'template/home.html',
		controller:'HomeController'
	})
	.when('/Contact', {
		templateUrl:'template/contact.html',
		controller:'ContactController'
	})
	.when('/Service', {
		templateUrl:'template/service.html',
		controller:'ServiceController'
	})
})