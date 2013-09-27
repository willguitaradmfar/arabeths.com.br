

angular.module('myApp.directives', [])
.directive('fotorama', function() {	
	var directive = {
		restrict : 'A',
		link : function(scope, element, attrs) {			
			setTimeout(function() {
				
				//Galleria.loadTheme('javascripts/vendors/galleria/theme/picasa/galleria.picasa.min.js');
									
				Galleria.run('.restaurantes-festas');
				
				
					//$(element).fotorama({width : 750, heigth : 750, autoplay:4000});					
			}, 100)						
		}
	}	
	return directive;
});
