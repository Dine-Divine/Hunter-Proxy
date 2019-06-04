const express = require('express');
const bodyparser = require('body-parser');
<<<<<<< HEAD
const port = 3005
app = express();
app.use(bodyparser.json());
app.use(express.static);

app.listen(port, ()=>{console.log(`proxy server listening on port ${port}`)});


=======
const port = 3006
require('dotenv').config();
app = express();
app.use(bodyparser.json());
app.use(express.static('client/dist'));
app.listen(port, ()=>{
    console.log(`proxy server listening on port ${port}`)
});
>>>>>>> dev
