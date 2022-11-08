const mailer = require("./mailer");
const sec = require("./sec");
const templates = require("./templates");
const models = require("./models");
const modules = {
    mailer,
    sec,
    templates,
    models,
}

module.exports = { ...modules };