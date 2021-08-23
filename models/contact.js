const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim : true,
        required: true,
        maxlength: 32
    },

    email: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    admission_session: {
        type: String,
        trim: true,
    },
    phone: {
        type: Number,
        trim: true,
        maxlength: 10
    },
    
    message: {
        type: String,
        trim: true,
        required: true,
        maxlength: 2500
    },
    admission_class: {
        type: String,
        trim: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Contact", contactSchema);