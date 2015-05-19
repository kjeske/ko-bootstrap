define(
    [
        'knockout',
        'text!./if-view.html'
    ],
    function(ko, template) {

        ko.components.register('if',
            {
                viewModel: {
                    createViewModel: function (params, componentInfo) {

                        var nodesTrue = ko.utils.arrayFilter(componentInfo.templateNodes, function(x){
                            return (x && x.tagName && x.tagName.toUpperCase() === 'TRUE');
                        });
                      
                        var nodesFalse = ko.utils.arrayFilter(componentInfo.templateNodes, function(x){
                            return (x && x.tagName && x.tagName.toUpperCase() === 'FALSE');
                        });

                        var condition;
                      
                        if (params.condition) {
                            
                            condition = params.condition;
                            
                        } else if (params.not) {
                            
                            condition = ko.computed(function() { return !ko.unwrap(params.not); });        
                                            
                        }                                
                                                                 
                        return {
                            nodesTrue: nodesTrue,
                            nodesFalse: nodesFalse,
                            condition: condition,
                            data: ko.dataFor(componentInfo.element)
                        };
                    }
                },
                template: template
            }
        );
    }
);








  