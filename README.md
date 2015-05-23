# ko-bootstrap
Bootstrap components for KnockoutJS

Dependencies:
KnockoutJS, Bootstrap

```html
<form data-bind="with: form">

    <control params="value: Name"></control>
    <control params="value: Password"></control>
    <control params="value: Gender"></control>

</form>
```

```javascript
[...]

var form = {};

form['Name'] = ko.observable('John')
  .extend({
    bootstrap: {
      type: 'text', // text is by default, can be ommited
      label: 'Your name',
      readOnly: true
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

[...]
```

## How to run the demo
This demo uses RequireJS and its Text plugin so in order to run it properly you need to set up a simple web server. This repository provides a NodeJS script to run such server. Inside the main repository folder run NodeJS command:
```
node server.js
```
Then open website:
```
http://localhost:8888/demo/index.html
```
