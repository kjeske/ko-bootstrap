define(
    function() {

        function ComponentBase(params) {

            this.value = params.value;
            this.options = params.options;

            this.name = this.options.name;

        }

        return ComponentBase;
    }
);