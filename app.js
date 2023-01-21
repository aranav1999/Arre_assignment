const express = require('express');
const mongoose = require('mongoose');
const GroupMessage = require('./models/GroupMessage');
const groupController = require('./controllers/group')
const app = express();

// Connect to MongoDB
async function connect() {
    try {
        const url = 'mongodb+srv://aranav:aranav123@whatsapp.ipsif2q.mongodb.net/?retryWrites=true&w=majority' || 'mongodb://127.0.0.1:27017/whatsapp';
        await mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('Connected to \x1b[32mDatabase\x1b[0m');
    } catch (err) {
        console.log('ERROR: Could not connect to database: ', err);
        process.exit(1);
    }
}

connect();

// API to load all the group messages in a paginated manner
app.get('/group/:id/messages', groupController.getGroupMessages);

// API to create a message in the group
app.post('/group/:id/message', groupController.createGroupMessage);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
