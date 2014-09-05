# Mongoose Schema plugin for controllers

Keeps a controller reference in the model.

## Example
```
# Model definition
var MySchema = new Mongoose.Schema();
MySchema.plugin(require('mongoose-controller'));
Mongoose.model('MyModel', MySchema);

# Controller definition
var MyController = {};
MyController.show = function (req, res) { res.render('show') };
MyModel.controller(MyController);

# Somewhere in the program
app.get('/', MyModel.controller().show);
````