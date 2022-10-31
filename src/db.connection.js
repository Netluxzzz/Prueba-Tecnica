const mongoose = require('mongoose')

const dbConnection = async () => {
    try {
        const DB = await mongoose.connect('mongodb://localhost:27017/CloudDistrictLeague')
        console.log("The Data Base Connection has been successful", DB.connection.name)
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnection