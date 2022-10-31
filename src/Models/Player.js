const { Schema, model } = require("mongoose")

const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    surname: {
        type: String,
        required: true
    },

    birthdate: {
        type: String,
        required: true
    },

    phonenumber: {
        type: String,
        required: true
    },

    salary: {
        type: Number,
        required: true
    },

    rol: {
        type: String,
        required: true
    },

    recordCreationDate: String,

    club: String

})

module.exports = model('Player', PlayerSchema)