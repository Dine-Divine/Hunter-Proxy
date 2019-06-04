const express = require('express');
const bodyparser = require('body-parser');
const port = 3006
require('dotenv').config();
app = express();
app.use(bodyparser.json());
app.use(express.static('client/dist'));
app.listen(port, ()=>{
    console.log(`proxy server listening on port ${port}`)
});
