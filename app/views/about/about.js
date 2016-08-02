
angular.module('flapperNews')
.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){

        $stateProvider

        .state('about', {
            url: '/about',
            views: {

                // The main template will have relatively named
                '': {
                    templateUrl: 'views/about/about.html'
                },

                // The child view will got absolute named
                'aboutUserInfo@about': {
                    templateUrl: 'views/about/about-userinfo.html',
                    controller: 'AboutUserInfoCtrl'
                },

                // Another child view
                'aboutPostsInfo@about': {
                    templateUrl: 'views/about/about-postsinfo.html',
                    controller: 'AboutPostsInfo'
                }


            }
        })

    }
])
.controller('AboutUserInfoCtrl', ['$scope', function($scope){
    $scope.user = {
        firstname: 'Will',
        lastname: 'Song',
        email: 'wsong@me.com'
    }
}])
.controller('AboutPostsInfo', ['$scope', function($scope){
    $scope.postSummaries = [
        {
            id: 'p0001',
            by: 'John Smith'
        },
        {
            id: 'p002',
            by: 'Bob Dell'
        }
    ]
}])