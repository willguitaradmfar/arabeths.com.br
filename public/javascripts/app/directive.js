

angular.module('myApp.directives', [])
.directive('fotorama', function() {	
	var directive = {
		restrict : 'A',
		link : function(scope, element, attrs) {			
			setTimeout(function() {
					$(element).fotorama({width : 750, heigth : 750, autoplay:4000});					
			}, 100)						
		}
	}	
	return directive;
});
