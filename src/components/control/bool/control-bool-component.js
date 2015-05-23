define(
    [
        'knockout',
        '../control-base',
        'text!./control-bool-view.html'
    ],
    function (ko, ComponentBase, template) {

        ko.components.register('control-bool',
            {
                viewModel: Component,
                template: template
            }
        );
        
        function Component(params) {

            ComponentBase.call(this, params);

            params.options.layout = 'pure';

            this.options = params.options;
           
        }

        Component.prototype = Object.create(ComponentBase.prototype);
    }
);