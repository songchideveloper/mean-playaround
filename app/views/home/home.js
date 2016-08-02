
angular.module('flapperNews')
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'views/home/home.html',
                    controller: 'MainCtrl'
                })

                .state('home.loan', {
                    url: '/home',
                    templateUrl: 'views/home/home-loan.html',
                    controller: function($scope){
                        $scope.loans = ['lt0001', 'lt0002', 'lt0003'];
                    }
                })

                .state('home.borrower', {
                    url: '/home',
                    templateUrl: 'views/home/home-borrower.html',
                    controller: function(){
                        var vm = this;
                        vm.borrowers = ['John Stark', 'Imp', 'Mother of Dragon']
                    },
                    controllerAs: 'vmHomeBorrower'
                })



            $urlRouterProvider.otherwise('home');
        }
    ])