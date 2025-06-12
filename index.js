require('dotenv').config();
const express = require('express');

const app = express();

const port = 4500;

app.get('/', (req, res) => {
    res.send("Reponse has been sent successfully");
})

app.get('/login', (req, res) => {
    res.send(`<h1>Please Login Here!</h1>`);
})

app.listen(process.env.PORT, () => {
    console.log(`Example app is listening on port ${port}`);
})




// Server Ban Gaya MKC
