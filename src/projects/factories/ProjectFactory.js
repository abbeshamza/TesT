(function(){
var ProjectsFactory = function(Restangular, $q){
	var factory = {};
	factory.getAll = function ()
	{
		var res  = [];

		res  = Restangular.all('projects').getList("")
		.then(function (response) {
			console.log(response);
                        return response;
                    }, function () {
                        console.log("Internal Error");
                    });
		return res;
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