define(
    [
        'knockout',
        'text!./field-vertical-component.html'
    ],
    function(ko, template) {

        ko.components.register('field-vertical',
            {
                template: template
            }
        );
    }
);