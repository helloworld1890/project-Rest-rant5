require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose')
const app = express();
// const path = require('path')
// app.use('/places', require('./controllers/places'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use('/places', require('./controllers/places'));
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })

module.exports.Place = require('./models/places')
app.get('/', (req, res) => {
    res.render('home');
})

app.get('*', (req, res) => {
    res.render('error404');
    // res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)