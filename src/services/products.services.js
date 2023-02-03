const { Sequelize } = require("sequelize");
const { products } = require("../models");
const model = require('../models')

class ProductServices {
    static async createProducts(newProduct) {
        try {
            const result = products.create(newProduct)
            console.log("products");
            return result;
        } catch (error) {
            throw error
        }
    }

    static async getGreaterZero() {
        try {
            const result = await model.products.findAll({
                where: {
                    available_qty: {
                        [Sequelize.Op.gt]: 0,
                    },
                },
                include: {
                    model: model.users,
                    as: "user",
                    attributes: ["username"],
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    };

};



module.exports = ProductServices;