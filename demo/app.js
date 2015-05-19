// Initialize knockout
define(
    [
        "knockout",
        "extenders/bootstrap-extenders",
        'components/bootstrap-components-init',
        'jquery',
        'bootstrap'
    ],

    function (ko) {
        return {
            init: function() {

                var form = {};                
                                
                form['Name'] = ko.observable('John')
                  .extend({
                    bootstrap: {
                      type: 'text', // text is by default, can be ommited
                      label: 'Your name',
                      readOnly: 'text'
                    }
                  });
                
                form['Password'] = ko.observable()
                  .extend({
                    bootstrap: {
                      label: 'Pick a password',
                      password: true
                    }
                  });
                
                form['Gender'] = ko.observable('male')
                  .extend({
                    bootstrap: {
                      label: 'Gender',
                      type: 'dropdown',
                      
                      items: [
                        { text: 'Male', value: 'male' },
                        { text: 'Female', value: 'female' }
                      ]
                    }
                  });  
                
                var model = {
                  form: form
                };
                
                ko.applyBindings(model);
            }
        };
    }
);

