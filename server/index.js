const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist/index.html')));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})