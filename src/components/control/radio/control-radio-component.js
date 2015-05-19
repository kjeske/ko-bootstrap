define(
    [
        'jquery',
        'knockout',
        '../control-base',
        'text!./control-radio-view.html'
    ],
    function ($, ko, ComponentBase, template) {

        ko.components.register('control-radio',
            {
                viewModel: ComponentBase,
                template: template
            }
        );

    }
);