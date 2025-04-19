const express = require('express');
const { newKey } = require('../db');
const signupRouter = express.Router();

signupRouter.post('/', express.json(), async (req, res) => {
    let newUser = await newKey(req.body.username);
    res.status(201).json({
        "username": newUser.username,
        "api_key": newUser.apikey
    });
});

exports.signupRouter = signupRouter;
