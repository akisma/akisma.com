require.config({
  //baseUrl: '/js/',
  // Initialize the application with the main application file.
  deps: ['main'],

    paths: {

        // Libraries.
        jquery:       'vendor/jquery-2.0.3',
        underscore:   'vendor/lodash.underscore-2.2.1',
        backbone:     'vendor/backbone-1.1.0',
        stellar:      'plugins/jquery.stellar'
        //ModelBinder:  'vendor/Backbone.ModelBinder-1.0.5',
        //jqueryUI:     'plugins/jqueryUI'


        //our components
        //errors:       'components/errors'
    },

    shim: {
        // Backbone library depends on lodash and jQuery.
        underscore: {
          exports: '_'
        },

        backbone: {
          deps: ['underscore', 'jquery'],
          exports: 'Backbone'
        },

        stellar: {
            deps: ['jquery'],
            exports: 'jquery'
        }

        /* plugins, eventually
        jqueryUI: {
          deps: ['jquery'],
          exports: 'jQuery'
        },

        
        'plugins/jquery.currencyInput':       ['jquery'],
        'plugins/jquery.simpleCollapsible':   ['jquery'],
        'plugins/chosen.jquery':              ['jquery'],
        'plugins/jquery.persistState':        ['jquery']
        */
    }
});

require([
    'app'
],

function(app) {
    var mod = 'pages/home'; //todo: make this dynamic per-page

    /* syntax has changed, fixme
    if (!Backbone.History.started){
      Backbone.history.start({ pushState: true, root: app.root });
    } 
    */

    //initialize app
    app.initialize();

    //either need a router or just analyze the url to get the right js
    //initialize module
    require([mod], function(module){
        var instance = new module();
        instance.init();
    });
});