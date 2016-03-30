
//ajouter les controller et les ajouter au module avec l injection du scope
// pour acceder aux param de la req on passera à la fonction ($scope,$routeParams)
// var x=$routeParams.nom_param
(function(){
	var ProjectController = function($scope,$log,ProjectsFactory) // on inject le factory ou le service au controller , log permet d afficher les erreurs lié à l appel ajax
	{
		//$scope.projects=null;
		function init()
		{	
				ProjectsFactory.getFactory().then(function (response) {
                        return  $scope.projects = response;
                    }, function (fallback) {
                        return $q.reject(fallback);
                    });
		}
		init();
		
	};
	ProjectController.$inject=['$scope','$log','ProjectsFactory'];
	angular.module('App').controller('ProjectController',ProjectController);
}
());