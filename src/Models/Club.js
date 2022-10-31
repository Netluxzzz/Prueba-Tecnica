const { Schema, model } = require("mongoose")

const ClubSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    budget: {
        type: Number,
        required: true
    },

    recordCreationDate: String

})

module.exports = model('Club', ClubSchema)