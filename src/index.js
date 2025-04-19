const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const { messageRouter } = require('./routes/message');

app.use('/message', messageRouter);

const { signupRouter } = require('./routes/sign-up');

app.use('/signup', signupRouter);

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})