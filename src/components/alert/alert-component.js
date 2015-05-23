define(
    [
        'knockout',
        'text!./alert-view.html'
    ],
    function(ko, template) {

        ko.components.register('alert',
            {
                viewModel: {
                    createViewModel: function (params, componentInfo) {
                        params.type = params.type || componentInfo.element.getAttribute('type');
                        params.context = ko.dataFor(componentInfo.element);
                        return new Component(params);
                    }
                },
                template: template
            }
        );

        function Component(params) {

            this.params = params;
            this.context = params.context;
            
            this.css = ko.computed(function() { 
                return 'alert alert-' + ko.unwrap(params.type); 
            });

            this.visible = ko.computed(function () {

                return params.text == undefined // no message specified
                    || ko.utils.unwrapObservable(params.text); // message is not empty

            }, this);
        }
    }
);