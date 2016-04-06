(function(){
    var ListProjectsController = function($scope,$log,ProjectsFactory,$rootScope,$mdDialog,$mdMedia)
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
        $scope.addProject=function(){
            console.log('ici');
            var popup =$mdDialog.confirm().title('Add new user')
                .textContent('a new user will be added')
                //.targetEvent($projects)
                .ok('Add')
                .cancel('Cancel');
            $mdDialog.show(popup);
        }
        all();

    };
    ListProjectsController.$inject=['$scope','$log','ProjectsFactory','$rootScope','$mdDialog','$mdMedia '];
    angular.module('App').controller('ListProjectsController',ListProjectsController);
}
());