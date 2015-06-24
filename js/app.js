var notesApp = angular.module('notesApp', ['ui.router', 'firebase']);

notesApp.config(function($stateProvider, $urlRouterProvider) {
  
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('');
  $urlRouterProvider.when('', 'index');
  
  // Now set up the states
  $stateProvider
    .state('notesView', {
      url: "/{user}/{title}",
      templateUrl: "views/notes.html",
    })
    .state('index', {
      url: "/index",
      templateUrl: "views/welcome.html",
    })
	  .state('listView', {
      url: "/{user}",
      templateUrl: "views/list.html",
    })    
    ;
});