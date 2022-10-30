const sendMail = require("./sendMail");
const transporter = require("./transporter");
const messages = require("./messages")
module.exports = mailer = {
    messages,
    sendMail, 
    transporter,
}