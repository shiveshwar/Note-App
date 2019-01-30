const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    note: String,
    keyword: String,
    userId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);