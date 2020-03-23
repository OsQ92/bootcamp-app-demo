const express = require('express');
const bodyParser = require('body-parser');
const images = require('./Images.js');
const email = require('./Email.js');

const app = express();

app.use(bodyParser.json());
app.use('/static', express.static('public'));

const port = 4000;

app.get('/', (req, res) => res.send('Hello World'));
app.get('/images', (req, res) => {images.getImages(req,res)});

app.post('/email', (req, res) => {email.sendEmail(req,res)});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));