const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5500;

const enginesRouter = require('./routers/engines.routers');
const usersRouter = require('./routers/users.routers');

const isAdmin = require('./middlewares/isAdmin.middleware');

/* GET POST PUT DELETE - PATCH HEAD OPTIONS*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, () => {
    console.log("Server running http://localhost:"+port);
});

app.get('/', (req, res) => {
    res.send("Hello world."); /* Send to front */

});

app.post('/test', (req, res) => {
    res.json({message:"Test Path"});
});

app.use('/engines', enginesRouter);
app.use('/users', usersRouter);