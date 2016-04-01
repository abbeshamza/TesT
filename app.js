var App=angular.module('App',['ngRoute','restangular','ngMaterial'])
	.run(function(){
		console.log("app is running")
	});
App.config(function($routeProvider,RestangularProvider)
{
	console.log('A gets initialized its Restangular configuration');
    RestangularProvider.setBaseUrl('http://127.0.0.1:8000/rest/');


	RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
		var extractedData;
		if (operation === "getList") {
			//console.log(data.data);
			extractedData = data.data;
		} else {
			extractedData = data;
		}
		return extractedData;
	});


	$routeProvider
	.when('/projects/:id',{
		controller : 'ProjectController',
		templateUrl: 'src/projects/views/setting.html'
	})
	.when('/projects',{
		controller : 'ListProjectsController',
		templateUrl: 'src/projects/views/home.html'
	})
	.otherwise({redirectTo :'/'});


    
	 

});






