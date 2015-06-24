notesApp.controller('notesController', 
['$scope', '$state', '$firebaseObject', 
function($scope, $state, $firebaseObject) {
	$scope.title = $state.params.title;
	var user = $state.params.user;
	
	var ref = new Firebase("https://simple-notes.firebaseio.com/" + user + "/" + $scope.title);
	var syncObject = $firebaseObject(ref);
	
	syncObject.$bindTo($scope, "note");
	
}]);