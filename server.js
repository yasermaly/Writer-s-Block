// Dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const authorsController = require('./controllers/authors.js');
const articlesController = require('./controllers/articles.js');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const PORT = process.env.PORT;



// Database Configuration
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Database Connection Error / Success
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use("/authors", authorsController);
app.use('/articles', articlesController);
app.use(express.static(__dirname + '/public'));


// ROUTES

// Index
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// Listener
app.listen(3000, () => console.log(`listening on port ${PORT}`));