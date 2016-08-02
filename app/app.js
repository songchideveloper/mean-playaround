'use strict';

// Declare app level module which depends on views, and components
angular.module('flapperNews', ['ui.router'])
    .controller('MainCtrl', ['$scope', 'postsService', mainController])
    .factory('postsService', [postService]);

function mainController($scope, postService) {

    var vm = this;

    vm.posts = postService.getPosts();

    vm.currentUser = 'wsong@me.com';


    vm.upvotesSortUp = function(){
        vm.upvoteSortStatus = '-upvotes';
        console.log(vm.upvoteSortStatus)
    };

    vm.upvotesSortDown = function(){
        vm.upvoteSortStatus = 'upvotes';
        console.log(vm.upvoteSortStatus)
    };

    vm.addPost = function () {
        if (!vm.titleToAdd || vm.titleToAdd === '') {
            return ;
        }
        vm.posts.push({
            title: vm.titleToAdd,
            upvotes: 0,
            upvotedUsers: [],
            link: vm.linkToAdd
        });
        vm.titleToAdd = '';
        vm.linkToAdd = '';
    };


    vm.thumbsupActive = function (post) {
        if (post.upvotedUsers.indexOf(vm.currentUser) >= 0) {
            return false;
        }
        post.upvotedUsers.push(vm.currentUser);
        post.upvotes += 1;
    };

    vm.thumbsupDeactive = function (post) {
        if (post.upvotedUsers.indexOf(vm.currentUser) < 0) {
            return false;
        }
        post.upvotedUsers.splice(post.upvotedUsers.indexOf(vm.currentUser), 1);
        post.upvotes -= 1;
    }
}


function postService() {

    var posts = [
        {title: 'post 1', upvotes: 5, upvotedUsers:[]},
        {title: 'post 2', upvotes: 2, upvotedUsers:[]},
        {title: 'post 3', upvotes: 15, upvotedUsers:[]},
        {title: 'post 4', upvotes: 9, upvotedUsers:[]},
        {title: 'post 5', upvotes: 4, upvotedUsers:[]}
    ];

    var getPosts = function () {
        return posts;
    };

    return {
        getPosts: getPosts
    };
}
