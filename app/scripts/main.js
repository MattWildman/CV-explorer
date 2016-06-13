(function() {
	var app = angular.module('cv-tool', ['ngSanitize']);
	app.controller('ExplorerController', ['$http', function($http) {
		
		var explorer = this;

		this.cvs = [];
		this.currentIndex = 0;
		this.currentCV = {};
		this.currentPage = 0;
		this.setCV = function(index) {
			this.currentIndex = index;
			this.currentCV = this.cvs[this.currentIndex];
			this.setPage(0);
		};
		this.setPage = function(index) {
			this.currentPage = index;
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
