(function(){
var ProjectsFactory = function(Restangular, $q){
	var factory = {};
	factory.getFactory = function ()
	{
		return Restangular.one('projects',9).get()
		.then(function (response) {
                        return response.data;
                    }, function (fallback) {
                        return $q.reject(fallback);
                    });
	}
	return factory ;
}
ProjectsFactory.$inject=['Restangular', '$q'];
angular.module('App').factory('ProjectsFactory',ProjectsFactory);
}());