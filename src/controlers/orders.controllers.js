const AuthServices = require("../services/authUsers.services");
const OrdersServices = require("../services/order.services");
const transporter = require("../utils/mailer");


const makeBuy = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await OrdersServices.makeBuy(id);
        if (result) {
            res.status(200).json({ message: "Successful purchase!" });
            const user = await AuthServices.getById(id);
            console.log(user);
            await transporter.sendMail({
                from: "diegocantymez@gmail.com",
                to: user.email,
                subject: "Compra exitosa",
                html: "<h1>tu compra se ha realizado exitosamente</h1> <p>sigue tu compra en el siguien <p/> <a href='#' target='new blank'>link</a>"
            })
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    } catch (error) {
        res.status(400).json(error.message)
    }
};

const getUsersOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await OrdersServices.getOrder(id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = { makeBuy, getUsersOrder };