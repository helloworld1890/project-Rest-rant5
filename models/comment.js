const mongoose = require('mongoose');
let commentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous'},
    rant: { type: Boolean, default: false},
    stars: {type: Number, required: true, default: "0.5" },
    content: { type: String, default: ''}
});

module.exports = mongoose.model( 'Comment', commentSchema);