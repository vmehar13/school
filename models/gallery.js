var mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    photo: {
        type: String,
    },
    category: {
        type: String,
        trim: true,
    }
})

module.exports = mongoose.model('Gallery', gallerySchema);