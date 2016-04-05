(function(){
    var MainController = function($scope,$log,ProjectsFactory,$rootScope,$mdSidenav)
    {

        $scope.listProjects=null;
        $scope.selected=null ;
        searchProject :string = '';
        tabIndex:number=1;
        function all()
        {
            ProjectsFactory.getAll().then(function (response) {
                return  $rootScope.projects = response;
            }, function (fallback) {
                return $q.reject(fallback);
            });
        }

        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();

        };

        $scope.selectProject = function(obj) {
            $scope.selected=obj;

        };



        all();


    };
    MainController.$inject=['$scope','$log','ProjectsFactory','$rootScope','$mdSidenav'];
    angular.module('App').controller('MainController',MainController);
}
());