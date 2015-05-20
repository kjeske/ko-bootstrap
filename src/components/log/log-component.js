define(
    [
        'knockout'
    ],
    function(ko) {

        ko.components.register('log',
            {
                viewModel: function(params) {
                    
                    console.log(params);
                    
                },
                template: ' '
            }
        );
    }
);








  