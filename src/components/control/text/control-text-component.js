define(
    [
        'knockout',
        '../control-base',
        'text!./control-text-view.html'
    ],
    function (ko, ComponentBase, template) {

        ko.components.register('control-text',
            {
                viewModel: Component,
                template: template
            }
        );

        function Component(params) {

            ComponentBase.call(this, params);

            this.type = this.options.password ? 'password' : 'text';
            this.multiline = this.options.multiline;
        }

        Component.prototype = Object.create(ComponentBase.prototype);

        return Component;
    }
);