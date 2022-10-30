const express = require("express");
const mongoose = require("mongoose")
const server = express();
const {sec, mailer} = require("./modules");
const cors = require("cors");

server.use(cors({ ...sec.config.cors }))
server.use(express.json())


server.get('/', async (req, res) => {
    try {
        return res.json({
            msg: "Test",
        })
    } catch (error) {
        // console.error(error);
        return res.json({
            error: "501: Server Error"
        });
    }
});


server.post("/contact-us", async (req, res) => {
  
  try {

    console.log(req.body);
    const {
        email, subject, 
        message, firstName, 
        lastName, phone,
        startDate, endDate, 
        locationState, locationCity, 
        addressLine1, addressLine2 
    } = req.body;
    
    const sd = new Date(startDate);
    const ed = new Date(endDate);

    await mailer.mail(
        email,
        subject,
        message,
        `<div style="width: 100%;display:flex;flex-direction:column;font-family:sans-serif;">
            <div>
                <strong>Name:&nbsp;</strong>
                <span>${firstName} ${lastName}</span><br />

                <strong>Email:&nbsp;</strong>
                <br />
                <a href="mail-to:${email}">${email}</a>
                <br />
                <br />

                <strong>Phone:&nbsp;</strong>
                <br />
                <a href="tel:${phone}">${phone}</a>
                <br />
                <br />

                <strong>Address Line 1:&nbsp;</strong>
                <span>${addressLine1}</span><br />
                
                <strong>Address Line 2:&nbsp;</strong>
                <span>${addressLine2 || "N/A"}</span><br />
                
                <strong>State:&nbsp;</strong>     
                <span>
                    ${locationState}
                </span><br />
                
                <strong>City:&nbsp;</strong>         
                <span>
                    ${locationCity}
                </span><br />
                
                <strong>Message:&nbsp;</strong>
                <span>${message}</span><br />
                
                <strong>Date Start:&nbsp;</strong>                
                <span>${sd.toDateString()}</span><br />                

                <strong>Date End:&nbsp;</strong>
                <span>${ed.toDateString()}</span><br />                

                <img style="height: 90px;" src="https://res.cloudinary.com/dbg1cm3ro/image/upload/v1666376361/purrfect-paws/logo_sriet4.webp"></img>
            </div>
        </div>`,
        true,
    );
  } catch (error) {
    console.error(error);
  }
});

// server.post('/pet-sitters', async (req, res) => {
  
// });

// Connect MongoDB
// (async () => {
//   try {
//     await mongoose.connect(sec.database.mongodbUri);
//     console.log("Connected to database.")
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// })();

// Connect Express
(async () => {
    try {
        server.listen(sec.config.port, () => {
            console.log("Purrfect Paws Server Listening...");
        })
    } catch (error) {
      console.error(error);
        return 1;
    }

})()
