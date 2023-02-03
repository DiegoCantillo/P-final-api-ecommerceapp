const models = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { users } = models

class AuthServices {
    static async register(user) {
        try {
            const result = await users.create(user)
            return result
        } catch (error) {
            throw error
        }
    }

    static async createCart(userCart) {
        try {
            const result = await models.cart.create(userCart)
            return result
        } catch (error) {
            throw error
        }
    }

    static async getById(id) {
        try {
            const result = users.findByPk(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async login(credentials) {
        try {
            const { email, password } = credentials;
            const user = await users.findOne({ where: { email } });
            console.log(user);
            if (user) {
                const isValid = bcrypt.compareSync(password, user.password);
                return isValid ? { isValid, user } : { isValid }
            }
            return { isValid: false }
        } catch (error) {
            throw error
        }
    }
    static genToken(data) {
        try {
            const token = jwt.sign(data, process.env.JWT_SECRET, {
                expiresIn: "10m",
                algorithm: "HS512"
            });
            return token;
        } catch (error) {
            throw error
        }
    }
}


module.exports = AuthServices;