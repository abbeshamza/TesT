(function(){
	var ProjectController = function($scope,$routeParams,$log,ProjectsFactory)
	{
		$scope.projects=null;


		function one()
		{
			    $id=$routeParams.id;
				       ProjectsFactory.getOne($id)
						   .then(function (response) {
                        return  $scope.project = response;
                    }, function (fallback) {
                        return $q.reject(fallback);
                    });
			one();

		}

		
	};
	ProjectController.$inject=['$scope','$routeParams','$log','ProjectsFactory'];
	angular.module('App').controller('ProjectController',ProjectController);
}
());