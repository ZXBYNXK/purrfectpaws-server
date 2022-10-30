const {transporter} = require("./transporter.js")
module.exports = sendMail = async (req, res, html) => {
   
    try {

        const {subject, message, email} = req.body;
        
        // await transporter.sendMail({
        //     from: email,
        //     to: "purrefectpaws.auto@zohomail.com",
        //     subject,
        //     message,
        //     html,
        // });

        // return res.json({
        //     "success": true,
        //     "message": "Email Automatically Delivered.",
        // })

    } catch (error) {

        console.error(error);

        return res.json({
            "success": flase,
            "message": "Email Delivery Error, Try Again."
        }) 
    }
}
