// Initialize knockout
define(
    [
        "knockout",
        "extenders/bootstrap-extenders",
        'components/bootstrap-components-init',
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
                      label: 'Your name'
                    }
                  });

                form['PickPassword'] = ko.observable()
                  .extend({
                    bootstrap: {
                      label: 'Pick a password',
                      type: 'bool'
                    }
                  });
                
                form['Password'] = ko.observable()
                  .extend({
                    bootstrap: {
                      label: null, // if label property is null or ommited, the whole label tag won't be rendered
                      password: true,
                      readOnly: ko.computed(function() { 
                          return !form['PickPassword']();
                      })                      
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
                  
                form['Status'] = ko.observable('success')
                  .extend({
                    bootstrap: {
                      label: 'Status',
                      type: 'dropdown',
                      
                      items: [
                        { text: 'Success', value: 'success' },
                        { text: 'Danger', value: 'danger' },
                        { text: 'Warning', value: 'warning' },
                        { text: 'Info', value: 'info' }
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

