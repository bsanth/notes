notesApp.controller('listController',
['$scope', '$state', '$http', 
function($scope, $state, $http) {
	$scope.user=$state.params.user;
	$scope.notes = [];
	
	$http.get('https://simple-notes.firebaseio.com/' + $scope.user + '.json?shallow=true').
	  success(function(data, status, headers, config) {
		for (var key in data) {
			if (data.hasOwnProperty(key)) {
				$scope.notes.push(key);
			}
		}
	  }).
	  error(function(data, status, headers, config) {
	    console.error("Error in getting data. No such user.");
	  });
	
}]);