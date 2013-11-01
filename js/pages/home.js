define(
	[
		'app',
		'jquery',
		'stellar'
	], 
	function(app, $){
		return function(){
			return {
				init: function(){
					$('body').stellar();
				}
			}
		}
	}
);