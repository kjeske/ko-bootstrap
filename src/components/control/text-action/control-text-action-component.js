define(
    [
        'knockout',
        '../text/control-text-component',
        'text!./control-text-action-view.html'
    ],
    function(ko, TextComponent, template) {

        ko.components.register('control-text-action',
            {
                viewModel: TextComponent,
                template: template
            }
        );

    }
);