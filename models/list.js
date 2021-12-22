const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    cocktails: [{
        type: Schema.Types.ObjectId,
        ref: 'Cocktail'
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
});

module.exports = mongoose.model("List", listSchema);