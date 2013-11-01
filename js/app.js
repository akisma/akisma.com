//app.js
define(
	[
		'underscore',
		'backbone',
		'jquery'
	], 
	function(_, Backbone, $){
		return {
			eventHub: _.clone(Backbone.Events),

			initialize: function(){
				console.log('GRRRRRAAAHHHHH');
			}
		};
	}
);