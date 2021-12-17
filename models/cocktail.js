const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cocktailSchema = new Schema({
    name: String,
});

module.exports = mongoose.model("Cocktail", cocktailSchema);