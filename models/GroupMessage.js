// models/GroupMessage.js
const mongoose = require('mongoose');

const GroupMessageSchema = new mongoose.Schema({
    messageId: {
        type: String,
        required: true,
        unique: true
    },
    groupId: {
        type: String,
        required: true
    },
    senderId: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now
    },
    reactions: [{
        userId: {
            type: String,
            required: true
        },
        reaction: {
            type: String,
            required: true
        }
    }]
});

module.exports = mongoose.model('GroupMessage', GroupMessageSchema);
