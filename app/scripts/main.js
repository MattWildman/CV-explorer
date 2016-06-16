(function() {

	var app = angular.module('cv-tool', ['ngSanitize']);

	app.controller('ExplorerController', ['$http', function($http) {

		var explorer = this;

		explorer.cvs = [];
		explorer.currentIndex = 0;
		explorer.currentCV = {};
		explorer.currentPage = 0;
		explorer.currentSection = {};

		explorer.setCV = function(index) {
			explorer.currentIndex = index;
			explorer.currentCV = explorer.cvs[explorer.currentIndex];
			explorer.setPage(0);
		};
		explorer.setPage = function(index) {
			explorer.currentPage = index;
			explorer.currentSection = {};
		};
		explorer.setSection = function(index) {
			explorer.currentSection = explorer.currentCV.pages[explorer.currentPage].sections[index];
		};
		explorer.isActiveCV = function(index) {
			return index === explorer.currentIndex;
		};
		explorer.isActivePage = function(index) {
			return index === explorer.currentPage;
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
	app.directive('notes', function() {
		return {
			restrict: 'E',
			templateUrl: 'notes.html'
		};
	});

})();
