const driver = require("./driver");
const {sendGrid} = require("../sec/config");
module.exports = mail = async (to, subject, text, html) => {
    try {

        await driver.send({
            from: sendGrid.verifiedSender,
            to: [...to.map(client => client.split(":")[0]), sendGrid.adminEmail],
            replyToList: [...to.map(client => {
                let data = client.split(":");
                return { name: data[1], email: data[0] }
            }), { name: "Julie Rosa (Admin)" , email: sendGrid.adminEmail}],
            subject,
            text,
            html
        }, true);
        
            
        // console.log("Message sent!");
        return JSON.stringify({
            success: true,
            eMessage: "Your message has been sent.",
        })
    } catch (error) {
        // console.error(error);
        return JSON.stringify({
            success: false,
            eMessage: "Sorry an issue occured during emailing, please try again.",
        });
    }
}