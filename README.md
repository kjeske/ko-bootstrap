# ko-bootstrap
Twitter bootstrap components for KnockoutJS

```html
<form data-bind="with: form">
  <control params="value: Name"></control>
  <control params="value: Password"></control>
  <control params="value: Gender"></control>
</form>
```

```javascript
var form = {

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
        { text: 'Male', value: 20 },
        { text: 'Female', value: 30 }
      ]
    }
  });  

var model = {
  form: form
};

ko.applyBindings(model);
```
