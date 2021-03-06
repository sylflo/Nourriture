/**
 * Created by sylflo on 9/28/15.
 */
// Load required packages
var mongoose = require('mongoose');

// Define our token schema
var TokenSchema   = new mongoose.Schema({
    value: { type: String, required: true },
    userId: { type: String, required: true },
    clientId: { type: String, required: true }
});

module.exports = mongoose.model('Token', TokenSchema);