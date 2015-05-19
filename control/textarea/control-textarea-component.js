define(
    [
        'jquery',
        'knockout',
        '../control-base',
        'text!./control-textarea-view.html'
    ],
    function ($, ko, ComponentBase, template) {

        ko.components.register('control-textarea',
            {
                viewModel: Component,
                template: template
            }
        );

        function Component(params) {

            ComponentBase.call(this, params);

            params.options.rows = params.options.rows || 5;

        }

        Component.prototype = Object.create(ComponentBase.prototype);

        return Component;
    }
);