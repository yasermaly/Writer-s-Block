
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    img: String,
    name: String,
    bio: String
}, {
    timestamps: true
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;