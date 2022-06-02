const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	img: String,
	title: String,
    author: String,
	body: String
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;