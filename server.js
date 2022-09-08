const express = require('express');

const ffmpeg = require('fluent-ffmpeg');

const fileUpload = require('express-fileupload');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(5002, () => {
    console.log("Server is listening on port 5002")
})