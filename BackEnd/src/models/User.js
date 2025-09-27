const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    UserName: {
        type: String,
        minlength: 6,
        unique: true,
        required: true
    },
    Email: {
        type: String,
        minlength: 6,
        unique: true,
        required: true
    },
    Password: {
        type: String,
        minlength: 6,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });

module.exports = mongoose.model("User", User);