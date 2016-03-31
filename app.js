var App=angular.module('App',['ngRoute','restangular','ngMaterial'])
	.run(function(){
		console.log("app is running")
	});
App.config(function($routeProvider,RestangularProvider)
{
	console.log('A gets initialized its Restangular configuration');
    RestangularProvider.setBaseUrl('http://127.0.0.1:8000/rest/');

	$routeProvider
	.when('/projects/:id',{
		controller : 'ProjectController',
		templateUrl: 'src/projects/views/home.html'
	})
	.when('/projects',{
		controller : 'ListProjectsController',
		templateUrl: 'src/projects/views/setting.html'
	})
	.otherwise({redirectTo :'/'});


    
	 

});






