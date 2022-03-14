var mongoose = require('mongoose');
console.log("db.js")
mongoose.connect(process.env.mango_url);