
angular.module('flapperNews')
.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){

        $stateProvider

        .state('post', {
            url: '/post/{id}',
            templateUrl: 'views/post/post.html'
        })

    }
]);