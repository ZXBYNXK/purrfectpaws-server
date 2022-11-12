const {sendGrid} = require("../sec/config");
const sendGridMail = require("@sendgrid/mail");
sendGridMail.setApiKey(sendGrid.apiKey);
module.exports = driver = sendGridMail;