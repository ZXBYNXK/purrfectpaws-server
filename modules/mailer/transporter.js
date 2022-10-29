const nodemailer = require('nodemailer');
const {smtp} = require('../sec/smtp')

module.exports = transporter = () => {
    return nodemailer.createTransport({
        ...smtp,
    })
}