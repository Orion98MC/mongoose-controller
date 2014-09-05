/*
  This schema plugin allows you to store the controller of a model inside the statics of the schema

  Usage:

    var MySchema = new Mongoose.Schema();
    MySchema.plugin(require('mongoose-controller'));
    Mongoose.model('MyModel', MySchema);

    # In your controller
    var MyController = {};
    MyController.show = function (req, res) { res.render('show') };
    MyModel.controller(MyController);

    # Somewhere in the program
    app.get('/', MyModel.controller().show);
  
*/

function storeController(schema, options){
  schema.static('controller', function controllerGetOrSet(fn) { 
    if (fn) schema.statics._controller = fn;
    return schema.statics._controller;
  });
}

module.exports = storeController;