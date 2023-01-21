// controllers/group.js
const GroupMessage = require('../models/GroupMessage');

exports.getGroupMessages = (req, res) => {
    const groupId = req.params.id;
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;

    GroupMessage.find({ groupId }).sort({ timestamp: -1 }).skip((page - 1) * limit).limit(limit).then(messages => {
        res.json({ messages });
    }).catch(err => {
        res.status(500).json({ error: err });
    });
};

exports.createGroupMessage = (req, res) => {
    const groupId = req.params.id;
    const senderId = req.body.senderId;
    const message = req.body.message;

    const newMessage = new GroupMessage({
        groupId,
        senderId,
        message,
        timestamp: Date.now()
    });

    newMessage.save().then(() => {
        res.json({ message: 'Success' });
    }).catch(err => {
        res.status(500).json({ error: err });
    });
};
