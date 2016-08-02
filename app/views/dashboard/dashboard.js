
angular.module('flapperNews')
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('dashboard', {
                    url: 'dashboard',
                    templateUrl: 'views/dashboard/dashboard.html'
                });

            $urlRouterProvider.otherwise('dashboard')

        }
    ]);