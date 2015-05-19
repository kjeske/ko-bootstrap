define(
    [
        'jquery',
        'knockout',
        'text!./progressbar-view.html'
    ],
    function($, ko, template) {

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

            var element = $(componentInfo.element);

            this.params = params;

            this.type = this.params.type || element.attr('type');
            this.label = this.params.label || element.attr('label');
            this.min = this.params.min || element.attr('min');
            this.max = this.params.max || element.attr('max');
            this.value = this.params.value;

            this.css = 'progress-bar ' + (this.type ? 'progress-bar-' + this.type : null);

            this.percent = ko.computed(function () {

                return Math.round(this.min / (this.max * 1.0) * 100) + '%';

            }, this);

            this.labelVisible = this.label != undefined;

        }
    }
);