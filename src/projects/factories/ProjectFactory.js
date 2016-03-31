(function(){
var ProjectsFactory = function(Restangular, $q){
	var factory = {};
	factory.getAll = function ()
	{
		return Restangular.all('projects').get()
		.then(function (response) {
			console.log(response);
                        return response;
                    }, function () {
                        console.log("Internal Error");
                    });
	}

	factory.getOne = function ($id)
	{

		return Restangular.one('projects',$id).get()
			.then(function (response) {
				return response.data;
			}, function (response) {
				console.log(response.data.container);
			});
	}


	return factory ;
}
ProjectsFactory.$inject=['Restangular', '$q'];
angular.module('App').factory('ProjectsFactory',ProjectsFactory);
}());