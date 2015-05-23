define(
    [
        'knockout',

        // components:

        './text/control-text-component',
        './text-action/control-text-action-component',
        './textarea/control-textarea-component',
        './radio/control-radio-component',
        './dropdown/control-dropdown-component',
        './bool/control-bool-component'
    ],
    function(ko) {

        ko.components.register('control',
            {
                viewModel: {
                    createViewModel: function (params, componentInfo) {

                        var templateParams = {
                            options: params.value.bootstrap,
                            value: params.value
                        };

                        templateParams.options.name = templateParams.options.name
                            || getValueName(componentInfo.element.getAttribute('params'));

                        var controlType = templateParams.options.type
                            || componentInfo.element.getAttribute('type');
                            
                        controlType = controlType || 'text';

                        var templateName = 'control-' + controlType;

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

            this.templateName = params.templateName;
            this.templateParams = params.templateParams;

        }

        function getParamFromString(objectString, paramName) {

            var allParamsStrings = objectString.split(',');

            for (var i = 0; i < allParamsStrings.length; i++) {

                var split = allParamsStrings[i].split(':');

                if (split[0].trim() == paramName) {
                    return split[1].trim();
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