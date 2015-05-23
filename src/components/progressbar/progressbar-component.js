define(
    [
        'knockout',
        'text!./progressbar-view.html'
    ],
    function(ko, template) {

        ko.components.register('progressbar',
            {
                viewModel: {
                    createViewModel: function (params, componentInfo) {

                        return new Component(params, componentInfo);

                    }
                },
                template: template
            }
        );

        function Component(params, componentInfo) {

            this.params = params;

            this.type = this.params.type || componentInfo.element.getAttribute('type');
            this.label = this.params.label || componentInfo.element.getAttribute('label');
            this.min = this.params.min || componentInfo.element.getAttribute('min');
            this.max = this.params.max || componentInfo.element.getAttribute('max');
            this.value = this.params.value;

            this.css = 'progress-bar ' + (this.type ? 'progress-bar-' + this.type : null);

            this.percent = ko.computed(function () {

                return Math.round(this.min / (this.max * 1.0) * 100) + '%';

            }, this);

            this.labelVisible = this.label != undefined;

        }
    }
);