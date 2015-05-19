define(
    [
        'jquery',
        'knockout',
        '../control-base',
        'text!./control-bool-view.html'
    ],
    function ($, ko, ComponentBase, template) {

        ko.components.register('control-bool',
            {
                viewModel: ComponentBase,
                template: template
            }
        );
     
    }
);