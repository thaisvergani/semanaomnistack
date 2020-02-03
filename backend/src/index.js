const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect(
    uris='mongodb+srv://admin:omnistack@cluster0-6ddu2.mongodb.net/test?retryWrites=true&w=majority',
    options={
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

app.use(express.json());

app.use(routes);
 
app.listen(3333);