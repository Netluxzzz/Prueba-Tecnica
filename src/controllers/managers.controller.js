const Manager = require('../Models/Manager')
const Club = require('../Models/Club')

exports.getAll = async (req, res) => {
    try {
        const managers = await Manager.find()
        res.json(managers)
    } catch (error) {
        res.json(error)
    }
}

exports.getManager = async (req, res) => {
    try {
        const id = req.params.id
        const manager = await Manager.findById(id)
        res.json(manager)
    } catch (error) {
        res.json(error)
    }
}

exports.addManager = async (req, res) => {
    try {
        const {name, surname, birthdate, phonenumber, salary} = req.body
        if(name && surname && birthdate && phonenumber && salary) {
            const recordCreationDate = new Date()
            const newManager = new Manager({name, surname, birthdate, phonenumber, salary, recordCreationDate})
            await newManager.save()
            res.json({msj: 'Succesful insertion', newManager})
        } else {
            res.json({isOk: false, msj: 'Missing data in the request'})
        }
        
    } catch (error) {
        res.json(error)
    }
}

exports.updateManager = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body

        if(id && data) {
            await Manager.findByIdAndUpdate(id, data)
            res.json({msj: 'Succesful update'})
        } else {
            res.json({isOk: false, msj: 'Missing data in the request'})
        }
        
    } catch (error) {
        res.json(error)
    }
}


exports.deleteManager = async (req, res) => {
    try {
        const id = req.params.id
        await Manager.findByIdAndDelete(id)
        res.json({msj: 'The record has been deleted successfully'})
    } catch (error) {
        res.json(error)
    }
}


exports.registerManagerInClub = async (req, res) => {
    try {
        const idManager = req.params.id
        const idClub = req.body

        if(idManager && idClub) {
            const club = await Club.findById(idClub.club)
            const manager = await Manager.findById(idManager)
            if((club.budget - manager.salary) >= 0 && manager.club != idClub.club) {
                let newBudget = club.budget - manager.salary
                const data = {"budget": newBudget}
                await Manager.findByIdAndUpdate(idManager, idClub)
                await Club.findByIdAndUpdate(idClub.club, data)
                res.json({msj: 'The manager has been succesfully registered to the club'})
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


exports.unregisterManagerInClub = async (req, res) => {
    try {
        const idManager = req.params.id
        const idClub = {"club" : ""}

        if(idManager && idClub) {
            await Manager.findByIdAndUpdate(idManager, idClub)
            res.json({msj: 'The manager has been succesfully unregistered to the club'})
        } else {
            res.json({isOk: false, msj: 'Missing data in the request'})
        }
    } catch (error) {
        res.json(error)
    }
}


exports.getManagersInClub = async (req, res) => {
    try {
        const idClub = req.params.id
        const filters = req.body
        filters.club = idClub
        
        const managersInClub = await Manager.find(filters)
        res.json(managersInClub)
    } catch (error) {
        res.json(error)
    }
}