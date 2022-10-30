const {sendGrid} = require("../sec/config");
module.exports = message = (to, subject, text, html) => {
    return {
        from: sendGrid.verifiedSender,
        to,
        subject,
        text,
        html, 
    }
}