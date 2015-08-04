angular.module('NPSApp', [])
.controller('NPSController', function() {
	var model = this;

	model.nps = function() {
		var total = parseInt(model.critics,10)+parseInt(model.neutrals,10)+parseInt(model.promotors,10);
		return Math.round(model.promotors/total*100) - Math.round(model.critics/total*100);
	};

});
