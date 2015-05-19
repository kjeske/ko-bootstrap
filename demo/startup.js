requirejs.config({
    baseUrl: '../src',

    paths: {
        'knockout': 'http://cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min',
        'bootstrap': 'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min',
        'jquery': 'http://code.jquery.com/jquery-2.1.4',
        'text': '../demo/text'
    },

    shim: {
        'jquery': {
            exports: '$',
        },
        'bootstrap': {
            deps: ['jquery'],
        }
    }
});

require(['../demo/app'], function (app) {
    app.init();
});