const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));


app.get('/', (req, res) => {
    res.json({ message: "wecome to me server" });
});

app.use('/api/v1/auth', authRoutes);

module.exports = app;