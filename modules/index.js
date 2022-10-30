const mailer = require("./mailer");
const sec = require("./sec");

const modules = {
    mailer,
    sec,
}

module.exports = { ...modules };