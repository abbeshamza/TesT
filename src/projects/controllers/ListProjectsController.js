(function(){
    var ListProjectsController = function($scope,$log,ProjectsFactory)
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
    ListProjectsController.$inject=['$scope','$log','ProjectsFactory'];
    angular.module('App').controller('ListProjectsController',ListProjectsController);
}
());