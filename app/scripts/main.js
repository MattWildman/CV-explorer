(function() {
	
	var app = angular.module('cv-tool', ['ngSanitize']);

	app.controller('ExplorerController', ['$http', function($http) {
		
		var explorer = this;

		explorer.cvs = [];
		explorer.currentIndex = 0;
		explorer.currentCV = {};
		explorer.currentPage = 0;
		explorer.setCV = function(index) {
			explorer.currentIndex = index;
			explorer.currentCV = explorer.cvs[explorer.currentIndex];
			explorer.setPage(0);
		};
		this.setPage = function(index) {
			explorer.currentPage = index;
		};

		$http.get('cvs.json').success(function(data) {
			explorer.cvs = data;
			explorer.setCV(0);
		});

	}]);

	app.directive('cv', function() {
		return {
			restrict: 'E',
			templateUrl: 'cv.html'
		};
	});

})();