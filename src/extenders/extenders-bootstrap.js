(function (root, factory) {

    if (typeof define === 'function' && define.amd) {
        define(['knockout'], factory);
    } else if (typeof exports === 'object') {
        var ko = require("knockout");
        module.exports = factory(ko);
    } else {
        factory(window.ko);
    }

}(this, function (ko) {

    ko.extenders.bootstrap = function (target, option) {

        target.bootstrap = option;

        return target;
    };

}));