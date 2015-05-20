define(
    [
        'jquery',
        'knockout',
        '../control-base',
        'text!./control-dropdown-view.html'
    ],
    function($, ko, ComponentBase, template) {

        ko.components.register('control-dropdown',
            {
                viewModel: Component,
                template: template
            }
        );

        function Component(params) {

            ComponentBase.call(this, params);

            this.selectedItem = ko.computed(function() {
             
                var items = ko.unwrap(this.options.items);
                                
                var item = ko.utils.arrayFirst(items, function(x) {
                    return x.value == params.value();
                });

                return item ? item.text : null;
                
            }, this);
        }

        Component.prototype = Object.create(ComponentBase.prototype);

        Component.prototype.select = function(item, a, b) {
            this.value(item.value);
        };
    }
);