angular.module('Memorize.frined', [])

.controller('frinedController', function ($scope , Friends) {
	$scope.frined={};
	
	$scope.sendToFrined=function(){
		Friends.getFriend($scope.friendsearch).then(function(data){
			$scope.frined.frined=data;
		})
	}

	Friends.getFriends().then(function(data){
		$scope.frined.all=data;
		console.log("dataaaa")
	})

	
});