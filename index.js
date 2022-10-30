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
            msg: "Test"
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
    return res.json({"msg": "Sent"});
    // mailer.sendMail(req, res, mailer.messages.default(req.body.subject, req.body.message));
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
