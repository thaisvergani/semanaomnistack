const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    title: String,
    body: String,
    cover_url: String,
    icon_url: String    
});

module.exports = mongoose.model('Post', PostSchema);