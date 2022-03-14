var mongoose = require('mongoose');
var ReqSchema = new mongoose.Schema({
    area: String,
    email: String,
    bgroup: String,
    quantity: Number,
    reason: String,
    p_number: String,
    message: String,
});
mongoose.model('Request', ReqSchema);
module.exports = mongoose.model('Request');