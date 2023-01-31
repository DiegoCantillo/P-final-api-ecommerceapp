//importams node mailer
const nodemailer = require('nodemailer');
//necesitamos la contraseña de app que esta en nuestra variable de entorno
require('dotenv').config();

//creamos nuestro transportador

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    secure: true,
    auth: {
        user: 'diegocantymez@gmail.com',
        pass: process.env.G_PASSWORD
    },
    tls: { rejectUnauthorized: false }
});

module.exports = transporter;