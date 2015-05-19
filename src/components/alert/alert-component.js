define(
    [
        'jquery',
        'knockout',
        'text!./alert-view.html'
    ],
    function($, ko, template) {

        ko.components.register('alert',
            {
                viewModel: {
                    createViewModel: function (params, componentInfo) {
                        var element = $(componentInfo.element);
                        params.type = params.type || element.attr('type');
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
            this.css = 'alert alert-' + params.type;

            this.visible = ko.computed(function () {

                return params.text == undefined // no message specified
                    || ko.utils.unwrapObservable(params.text); // message is not empty

            }, this);
        }
    }
);