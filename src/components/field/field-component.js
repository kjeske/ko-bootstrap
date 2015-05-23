define(
    [
        'knockout',
        './layout/field-pure-component',
        './layout/field-vertical-component'
    ],
    function(ko) {

        ko.components.register('field',
            {
                viewModel: {
                    createViewModel: function (params, componentInfo) {

                        params = params || {};

                        if (!params.options){
                            params.options = params;
                        }

                        params.options = params.options || {};
                        params.context = ko.dataFor(componentInfo.element);
                        params.bodyNodes = componentInfo.templateNodes;
                       
                        var componentName = 'field-' + (params.options.layout || 'vertical');
                        
                        return {                            
                            componentParams: params,
                            componentName: componentName
                        };
                    }
                },
                template: '<!-- ko component: { name: componentName, params: componentParams } --><!-- /ko -->'
            }
        );
    }
);