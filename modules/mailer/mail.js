const driver = require("./driver");
const {sendGrid} = require("../sec/config");
module.exports = mail = async (to, subject, text, html, toAdmin=false) => {
    try {
        if (!toAdmin) { 
            await driver.send({
                from: sendGrid.verifiedSender,
                to,
                subject,
                text,
                html
            });
        } else {
            await driver.send({
                from: sendGrid.verifiedSender,
                to: sendGrid.adminEmail,
                subject,
                text,
                html
            });
        }
            
        console.log("Message sent!");
        return JSON.stringify({
            success: true,
            message: "Your message has been sent.",
        })
    } catch (error) {
        console.error(error);
        return 1;
    }
}