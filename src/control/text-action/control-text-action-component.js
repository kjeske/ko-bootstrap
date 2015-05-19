define(
    [
        'jquery',
        'knockout',
        '../text/control-text-component',
        'text!./control-text-action-view.html'
    ],
    function($, ko, TextComponent, template) {

        ko.components.register('control-text-action',
            {
                viewModel: Component,
                template: template
            }
        );

        function Component(params) {

            TextComponent.call(this, params);

        }

        Component.prototype = Object.create(TextComponent.prototype);
    }
);