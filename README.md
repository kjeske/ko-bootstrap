# ko-bootstrap
Twitter bootstrap components for KnockoutJS

Dependencies:
KnockoutJS, jQuery

```html
<form data-bind="with: form">
    <control params="value: Name"></control>
    <control params="value: Password"></control>
    <control params="value: Gender"></control>
  
    <if params="condition: Gender() === 'male'">
        <true>You are a male!</true>
        <false>You are a female!</false>
    </if>
</form>
```

```javascript
require('./extenders/bootstrap-extenders');
require('./components/bootstrap-components-init');

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
  
form['Gender'] = ko.observable()
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
```
