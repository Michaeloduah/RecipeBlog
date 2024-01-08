require("dotenv").config();
const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/recipeblog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`Connection error: ${err}`);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});


// Models
require('./Category');
require('./Recipe');