var App=angular.module('App',['ngRoute','restangular','ngMaterial'])
	.run(function(){
		console.log("app is running")
	});
//ajouter les routes
App.config(function($routeProvider,RestangularProvider)
{
	console.log('A gets initialized its Restangular configuration');
    RestangularProvider.setBaseUrl('http://127.0.0.1:8000/rest/');

	$routeProvider
	.when('/projects',{
		controller : 'ProjectController',
		templateUrl: 'src/projects/views/home.html'
	})
	.otherwise({redirectTo :'/'});


    
	 

});






