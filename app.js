angular.module("folio", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('home', {
    url: '/',
    controller: 'mainCtrl',
    templateUrl: 'views/home.html'
  })
  .state('about', {
    url: '/about',
    controller: 'aboutCtrl',
    templateUrl: 'views/aboutMe.html'
  })
  .state('projects', {
    url: '/projects',
    controller: 'proCtrl',
    templateUrl: 'views/projects.html'
  })
})
