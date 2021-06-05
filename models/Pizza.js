const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    //ALSO toppings: [] or toppings: Array
    toppings: Array 
});

//create the Pizza model using PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

//export the Pizza model 
module.exports = Pizza;