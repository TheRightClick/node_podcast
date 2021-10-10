const mongoose = require('mongoose');
const {Schema, model} = mongoose;


const podcastSchema = new Schema({
    title: String,
    description: String,
    img: String,
    feed_id: Number,
    author: String,
    comment: String
});


const podcasts = model('podcasts', podcastSchema);

module.exports = podcasts;

