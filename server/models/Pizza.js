const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
  customer: {
    type: String,
    // Validation Schema is not required
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  crust: {
    type: String,
    // Validation Schema is not required
    required: true,
    // Enum is not required
    enum: ["thin", "chicago", "deep-dish", "hella-thick"]
  },
  cheese: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  sauce: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  toppings: [String]
});

const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;
