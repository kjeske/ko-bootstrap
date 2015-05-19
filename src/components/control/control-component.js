define(
    [
        'jquery',
        'knockout',

        // components:

        './text/control-text-component',
        './text-action/control-text-action-component',
        './textarea/control-textarea-component',
        './radio/control-radio-component',
        './dropdown/control-dropdown-component',
        './boolean/control-bool-component'
    ],
    function($, ko) {

        ko.components.register('control',
            {
                viewModel: {
                    createViewModel: function (params, componentInfo) {

                        var element = $(componentInfo.element);

                        var templateParams = {
                            options: params.value.bootstrap,
                            value: params.value
                        };

                        templateParams.options.name = templateParams.options.name
                            || getValueName(element.attr('params'));

                        var controlType = templateParams.options.type
                            || element.attr('type');
                            
                        controlType = controlType || 'text';

                        var templateName;

                        templateName = 'control-' + controlType;
                        
                        return new Component({
                            templateParams: templateParams,
                            templateName: templateName
                        });
                    }
                },
                template: '<!--ko component: { name: templateName, params: templateParams }--><!--/ko-->'
            }
        );

        function Component(params) {

            this.controlTemplate = params.controlTemplate;
            this.controlData = params.controlData;

        }

        function getParamFromString(objectString, paramName) {

            var allParamsStrings = objectString.split(',');

            for (var i = 0; i < allParamsStrings.length; i++) {

                var split = allParamsStrings[i].split(':');

                if ($.trim(split[0]) == paramName) {
                    return $.trim(split[1]);
                }
            }

            return null;
        }

        function getValueName(paramsString) {

            var valueProperty = getParamFromString(paramsString, 'value');

            if (valueProperty.indexOf('(') != -1) {
                return null;
            }

            return valueProperty;
        }

    }
);