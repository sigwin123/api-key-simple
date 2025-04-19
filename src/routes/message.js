const express = require('express');
const { findUser } = require('../db');
const messageRouter = express.Router();

messageRouter.get('/', async (req, res) => {
    let user = await findUser(req.headers['x-api-key']);
    res.status(200).json({
        "message": "Hello " + user.username
    });
});

exports.messageRouter = messageRouter;