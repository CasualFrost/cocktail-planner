const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cocktailSchema = new Schema({
    image: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      ingredients: {
        type: String,
        required: true,
      },
});

module.exports = mongoose.model("Cocktail", cocktailSchema);