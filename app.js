const express = require('express');

//routes
const { userRouter } = require('./routes/users.router')

const app = express();

app.use(express.json());

// endpoints
app.use('/upb/api/users', userRouter)

module.exports = {app};