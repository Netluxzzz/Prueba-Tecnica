const { Router } = require('express')
const routerClubs = Router()
const controllerClub = require('../controllers/clubs.controller')

routerClubs.get('/', controllerClub.getAll)
routerClubs.get('/:id', controllerClub.getClub)
routerClubs.post('/', controllerClub.addClub)
routerClubs.put('/:id', controllerClub.updateClub)
routerClubs.delete('/:id', controllerClub.deleteClub)

module.exports = routerClubs