(function() {
	var app = angular.module('cv-tool', ['ngSanitize']);
	app.controller('ExplorerController', function() {
		this.cvs = [
			{
				id: 'beginner',
				title: 'First CV',
				pages: [
					{
						name: 'Page one',
						sections: [
							{
								title: 'Heading',
								content: '<p>Beginners\' CV heading section</p>'
							},
							{
								title: 'Statement',
								content: '<p>Beginners\' CV statement</p>'
							},
							{
								title: 'Education',
								content: '<p>Beginners\' CV education</p>'
							}
						]
					},
					{
						name: 'Page two',
						sections: [
							{
								title: 'Work experience',
								content: '<p>Beginners\' CV work experience</p>'
							},
							{
								title: 'Skills',
								content: '<p>Beginners\' CV skills</p>'
							},
							{
								title: 'Interests',
								content: '<p>Beginners\' CV interests</p>'
							}
						]
					}
				]
			},
			{
				id: 'experienced',
				title: 'Experienced hire CV',
				pages: [
					{
						name: 'Relevant experience',
						sections: [
							{
								title: 'Heading',
								content: '<p>Experienced CV heading section</p>'
							},
							{
								title: 'Statement',
								content: '<p>Experienced CV statement</p>'
							},
							{
								title: 'Education',
								content: '<p>Experienced CV education</p>'
							}
						]
					},
					{
						name: 'Full history',
						sections: [
							{
								title: 'Work experience',
								content: '<p>Experienced CV work experience</p>'
							},
							{
								title: 'Skills',
								content: '<p>Experienced CV skills</p>'
							},
							{
								title: 'Interests',
								content: '<p>Experienced CV interests</p>'
							}
						]
					}
				]
			}
		];
		this.currentCV = this.cvs[0];
		this.currentPage = this.currentCV.pages[0];
		this.setCV = function(index) {
			this.currentCV = this.cvs[index];
			this.setPage(0);
		};
		this.setPage = function(index) {
			this.currentPage = this.currentCV.pages[index];
		};
	});
	app.directive('cv', function() {
		return {
			restrict: 'E',
			templateUrl: 'cv.html'
		};
	});
})();
