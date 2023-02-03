const AuthServices = require('../services/authUsers.services');
const transporter = require('../utils/mailer');

const register = async (req, res) => {
    try {
        const user = req.body;
        const result = await AuthServices.register(user)
        if (result) {
            const user_id = result.id;
            const userCart = { user_id }
            const cart = await AuthServices.createCart(userCart);
            res.status(201).json({ message: 'user created', cart });
            await transporter.sendMail({
                to: result.email,
                from: "diegocantymez@gmail.com",
                subject: "email confirmation",
                html: "<h1>!Registro exitoso!</h1> <p>Bienvenido a tu tienda virtual<p/> <a href='#'' target='new_blanc'> enlace </a>",
            })
        } else {
            res.status(400).json({ message: 'somethign wrong' })
        }
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email) {
            return res.status(400).json({
                error: 'Missing data',
                message: 'not email provided'
            })
        }
        if (!password) {
            return res.status(400).json({
                error: 'Missing data',
                message: 'not password provided'
            })
        }
        const result = await AuthServices.login({ email, password });
        if (result.isValid) {
            const { username, id, email } = result.user;
            const userData = { username, id, email };
            const token = await AuthServices.genToken(userData);
            userData.token = token;
            res.json(userData);
        } else {
            res.status(400).json({ message: 'user not found' })
        }
    } catch (error) {
        res.status(400).json({ message: 'something wrong' });
    }
}

module.exports = {
    register,
    login,
}