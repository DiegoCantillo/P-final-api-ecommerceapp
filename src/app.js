const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/authUsers.routes');
const productRoutes = require('./routes/products.routes');
const productInCartRoutes = require('./routes/productInCart.routes');
const orderRoutes = require('./routes/order.routes');
const db = require('./utils/database');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

// db.sync({ force: false })
//     .then(() => console.log("Base de datos sincronizada"))
//     .catch((error) => console.log(error));

app.get('/', (req, res) => {
    res.json({ message: "wecome to me server" });
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1', productRoutes, productInCartRoutes, orderRoutes);

module.exports = app;