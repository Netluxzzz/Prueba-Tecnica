const Player = require('../Models/Player')
const Club = require('../Models/Club')

exports.getAll = async (req, res) => {
    try {
        const players = await Player.find()
        res.json(players)
    } catch (error) {
        res.json(error)
    }
}

exports.getPlayer = async (req, res) => {
    try {
        const id = req.params.id
        const player = await Player.findById(id)
        res.json(player)
    } catch (error) {
        res.json(error)
    }
}

exports.addPlayer = async (req, res) => {
    try {
        const {name, surname, birthdate, phonenumber, salary, rol} = req.body
        if(name && surname && birthdate && phonenumber && salary && rol) {
            const recordCreationDate = new Date()
            const newPlayer = new Player({name, surname, birthdate, phonenumber, salary, rol, recordCreationDate})
            await newPlayer.save()
            res.json({msj: 'Succesful insertion', newPlayer})
        } else {
            res.json({isOk: false, msj: 'Missing data in the request'})
        }
    } catch (error){
        res.json(error)
    }
}

exports.updatePlayer = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body

        if(id && data) {
            await Player.findByIdAndUpdate(id, data)
            res.json({msj: 'Succesful update'})
        } else {
            res.json({isOk: false, msj: 'Missing data in the request'})
        }
        
    } catch (error) {
        res.json(error)
    }
}

exports.deletePlayer = async (req, res) => {
    try {
        const id = req.params.id
        await Player.findByIdAndDelete(id)
        res.json({msj: 'The record has been deleted successfully'})
    } catch (error) {
        res.json(error)
    }
}

exports.registerPlayerInClub = async (req, res) => {
    try {
        const idPlayer = req.params.id
        const idClub = req.body

        if(idPlayer && idClub) {
            const club = await Club.findById(idClub.club)
            const player = await Player.findById(idPlayer)
            if((club.budget - player.salary) >= 0 && player.club != idClub.club) {
                let newBudget = club.budget - player.salary
                const data = {"budget": newBudget}
                await Player.findByIdAndUpdate(idPlayer, idClub)
                await Club.findByIdAndUpdate(idClub.club, data)
                res.json({msj: 'The player has been succesfully registered to the club'})
                //Send email to notify
            } else {
                res.json({isOk: false, msj: 'Registration failed'})
            }
            
        } else {
            res.json({isOk: false, msj: 'Missing data in the request'})
        }
    } catch (error) {
        res.json(error)
    }
}

exports.unregisterPlayerInClub = async (req, res) => {
    try {
        const idPlayer = req.params.id
        const idClub = {"club" : ""}

        if(idPlayer && idClub) {
            await Player.findByIdAndUpdate(idPlayer, idClub)
            res.json({msj: 'The player has been succesfully unregistered to the club'})
        } else {
            res.json({isOk: false, msj: 'Missing data in the request'})
        }
    } catch (error) {
        res.json(error)
    }
}

exports.getPlayersInClub = async (req, res) => {
    try {
        const idClub = req.params.id
        const filters = req.body
        filters.club = idClub
        
        const playersInClub = await Player.find(filters)
        res.json(playersInClub)
    } catch (error) {
        res.json(error)
    }
}