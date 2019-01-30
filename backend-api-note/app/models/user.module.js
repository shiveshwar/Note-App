const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);