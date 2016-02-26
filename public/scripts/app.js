var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html'
        })
        .when('/dogs', {
            templateUrl: '/views/templates/dogs.html',
            controller: 'DogController'
        })
        .when('/cats', {
            templateUrl: '/views/templates/cats.html',
            controller: 'CatController'
        })
        .when('/smallfurry', {
            templateUrl: '/views/templates/smallfurry.html',
            controller: 'SmallfurryController'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);
