(function(){
    var ListProjectsController = function($scope,$log,ProjectsFactory,$rootScope)
    {
        $scope.listProjects=null;
        function all()
        {
            ProjectsFactory.getAll().then(function (response) {
                return  $scope.listProjects = response;
            }, function (fallback) {
                return $q.reject(fallback);
            });
        }
        all();

    };
    ListProjectsController.$inject=['$scope','$log','ProjectsFactory','$rootScope'];
    angular.module('App').controller('ListProjectsController',ListProjectsController);
}
());