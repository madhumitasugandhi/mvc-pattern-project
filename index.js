const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const app = express();
const port = process.env.PORT;


dotenv.config();

connectDb();

app.get('/', (req, res) => {
    res.send("Hello Madhu..!");
});

app.listen(port, () => {
    console.log(`Project running on port ${port}`);
});
