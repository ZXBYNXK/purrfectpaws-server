const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const petSitterSchema = new Schema({
    
    firstName: {
        type: String,
        required: true,
    },
    
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/dbg1cm3ro/image/upload/v1666376361/purrfect-paws/logo_sriet4.web",
    },

    email: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    },
    
    locationState: {
        type: String,
        required: true,
    },

    locationCity: {
        type: String,
        required: true,
    },

    clients: [
        {
            type: String,
        }
    ],
        
});

module.exports = model("PetSitter", petSitterSchema);