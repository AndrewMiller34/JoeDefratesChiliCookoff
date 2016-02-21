// create the module and name it scotchApp
var cookoffApp = angular.module('cookoffApp', ['ngRoute']);

// configure our routes
cookoffApp.config(function ($routeProvider) {
    

    // route for the home page
    $routeProvider.when('/', {
        templateUrl: 'Pages/Home.html',
        controller: 'homeController'
    })

    // route for the about page
    .when('/About', {
        templateUrl: 'Pages/About.html',
        controller: 'aboutController'
    })

    // route for the contact page
    .when('/ContactUs', {
        templateUrl: 'Pages/ContactUs.html',
        controller: 'contactController'
    })

    // Route for the Event History page.
    .when('/EventHistory', {
        templateUrl: 'Pages/EventHistory.html',
        controller: 'eventHistoryController'
    })

    .when('/EventHistory2007', {
        templateUrl: 'Pages/EventHistory/EventHistory-2007.html',
        controller: 'eventHistory2007Controller'
    })
        
    .when('/EventHistory2010', {
        templateUrl: 'Pages/EventHistory/EventHistory-2010.html',
        controller: 'eventHistory2010Controller'
    })


    // route for the Flyer page.
    .when('/Flyer', {
        templateUrl: 'Pages/Flyer.html',
        controller: 'flyerController'
    })

    // route for the Joe's History page.
    .when('/JoesHistory', {
        templateUrl: 'Pages/JoesHistory.html',
        controller: 'joesHistoryController'
    })

    // Route for the Sponsors page.
    .when('/Sponsors', {
        templateUrl: 'Pages/Sponsors.html',
        controller: 'sponsorsController'
    });
});

// create the controller and inject Angular's $scope
cookoffApp.controller('homeController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

cookoffApp.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

cookoffApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});