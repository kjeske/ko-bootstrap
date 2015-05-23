requirejs.config({
    baseUrl: '../src',

    paths: {
        'knockout': '../demo/lib/knockout-min',
        'bootstrap': '../demo/lib/bootstrap.min',
        'jquery': '../demo/lib/jquery-2.1.4.min',
        'text': '../demo/lib/text'
    },

    shim: {
        'bootstrap': {
            deps: ['jquery'],
        }
    }
});

require(['../demo/app'], function (app) {
    app.init();
});