define(
    [
        'knockout'
    ],
    function(ko) {

        ko.components.register('field-pure',
            {
                template: '<!-- ko template: { nodes: bodyNodes, data: context } --><!-- /ko -->'
            }
        );
    }
);