const Club = require('../Models/Club')
const Player = require('../Models/Player')
const Manager = require('../Models/Manager')

exports.getAll = async (req, res) => {
    try {
        const clubs = await Club.find()
        res.json(clubs)
    } catch (error) {
        res.json(error)
    }
}

exports.getClub = async (req, res) => {
    try {
        const id = req.params.id
        const club = await Club.findById(id)
        res.json(club)
    } catch (error) {
        res.json(error)
    }
}

exports.addClub = async(req, res) => {
    try {
        const {name, budget} = req.body
        if(name && budget) {
            const recordCreationDate = new Date()
            const newClub = new Club({name, budget, recordCreationDate})
            await newClub.save()
            res.json({msj: 'Succesful insertion', newClub})
        } else {
            res.json({isOk: false, msj: 'Missing data in the request'})
        }
    } catch (error) {
        res.json(error)
    }
}

exports.updateClub = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body

        if(id && data) {
            await Club.findByIdAndUpdate(id, data)
            res.json({msj: 'Succesful update'})
        } else {
            res.json({isOk: false, msj: 'Missing data in the request'})
        }
        
    } catch (error) {
        res.json(error)
    }
}

exports.deleteClub = async (req, res) => {
    try {
        const id = req.params.id
        const players = await Player.find({"club": id})
        const managers = await Manager.find({"club": id})

        for(let player of players) {
            await Player.findByIdAndUpdate(player._id, {"club": ""})
        }

        for(let manager of managers) {
            await Manager.findByIdAndUpdate(manager._id, {"club": ""})
        }

        await Club.findByIdAndDelete(id)
        res.json({msj: 'The record has been deleted successfully'})
    } catch (error) {
        res.json(error)
    }
}