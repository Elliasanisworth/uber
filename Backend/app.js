const dotenv = require('dotenv');
const express = require ('express');
dotenv.config();
const cors = require('cors');
const app = express();
const connectToDb = require('./DB/db');
const userRoutes = require('./routes/user.routes');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('hello world');
 });

app.use('/users', userRoutes);

 module.exports = app;