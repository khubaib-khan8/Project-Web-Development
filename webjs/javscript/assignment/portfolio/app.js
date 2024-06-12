var app = angular.module('portfolioApp', ['ngRoute']);

// Configure the routes
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'about.html',
            controller: 'AboutController'
        })
        .when('/projects', {
            templateUrl: 'projects.html',
            controller: 'ProjectsController'
        })
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

// Define controllers
app.controller('HomeController', function($scope, $http) {
    $http.get('data.json')
        .then(function(response) {
            $scope.home = response.data.home;
        })
        .catch(function(error) {
            console.log('Error fetching home data:', error);
        });
});

app.controller('AboutController', function($scope, $http) {
    $http.get('data.json')
        .then(function(response) {
            $scope.about = response.data.about;
        })
        .catch(function(error) {
            console.log('Error fetching about data:', error);
        });
});

app.controller('ProjectsController', function($scope, $http) {
    $http.get('data.json')
        .then(function(response) {
            $scope.projects = response.data.projects;
        })
        .catch(function(error) {
            console.log('Error fetching projects data:', error);
        });
});

app.controller('ContactController', function($scope, $http) {
    $http.get('data.json')
        .then(function(response) {
            $scope.contact = response.data.contact;
        })
        .catch(function(error) {
            console.log('Error fetching contact data:', error);
        });
});
