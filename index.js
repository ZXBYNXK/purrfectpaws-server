const express = require("express");
// const mongoose = require("mongoose");
const server = express();
const {sec, mailer, templates} = require("./modules");
// const {PetSitter} = models;
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");


server.use(helmet());
server.use(compression());
server.use(cors({ ...sec.config.cors }));
server.use(express.json());


server.get("/pet-sitters", async (req, res) => {
    try {
        
        return res.json(sec.petSitters);
        
    } catch (err) {
        console.error(err);
        res.json({
            msg: "501: Server Error",
            code: 501
        })
    }
})

server.get('*', async (req, res) => {
    try {
        return res.json({
            msg: "404: Not Found",
            status: 404
        })
    } catch (error) {
        // console.error(error);
        return res.json({
            error: "501: Server Error",
            code: 501,
        });
    }
});


// MongoDB is getting removed, there will be no database.

// server.get("/pet-sitters-raw", async (req, res) => {
//     try {
//         const petSitters = await PetSitter.find();
//         return res.json(petSitters);
//     } catch (err) {
//         console.error(err);
//     }
// })


// server.post("/contact-us", async (req, res) => {
//     try {
        
//         const {
//             email, subject, 
//             message, selectedPetSitters
//         } = req.body;


//         await mailer.mail(
//             [email, ...selectedPetSitters],
//             subject,
//             message,
//             templates.contactUs(req.body),
//         );

//         // await PetSitter.findByIdAndUpdate({$addToSet: {emails: [email]}});
        
//         return res.json({
//             "success": true,
//             "error": false,
//             "eMessage": `Email has been sent successfuly, expect a response.`
//         })

//     } catch (error) {
//         console.error(error);
//         return res.json({
//             "success": false,
//             "error": 400,
//             "eMessage": "Form is invalid, please try again.",
//         })

//     }
// });


// server.post("/pet-sitter-select", async (req, res) => {
//     try {

//          let petSitterSelection = await PetSitter.find({
//                 $or: [
//                     {
//                         clients: { $in: req.body.email}
//                     }, 
//                     {
//                         locationState: {$eq: req.body.locationState}
//                     }
//                 ]
//             });
//         // console.log(req.body)
//         // console.log(petSitterSelection)
//         return res.json(petSitterSelection);
        
//     } catch (error) {
//         // console.error(error);
//         return res.json({
//             "success": false,
//             "error": 500,
//             "eMessage": "Server error.",
//         })
//     }
// })


// server.post("/pet-sitter", async (req, res) => {
    
//     try {

//         let sitter = new PetSitter(req.body);

//         await PetSitter.create(sitter);

//         return res.json({
//             "success": true,
//             "error": false,
//             "eMessage": "Pet sitter has been successfuly stored to database."
//         })

//     } catch (error) {
        
//         console.error(error);

//         return res.json({
//             "success": false,
//             "error": 400,
//             "eMessage": "Data is invalid, please try again.",
//         })   

//     }
// });

// // Connect MongoDB
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
