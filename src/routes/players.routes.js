const { Router } = require('express')
const { router } = require('../app')
const routerPlayers = Router()
const controllerPlayer = require('../controllers/players.controller')

routerPlayers.get('/', controllerPlayer.getAll)
routerPlayers.get('/:id', controllerPlayer.getPlayer)
routerPlayers.post('/', controllerPlayer.addPlayer)
routerPlayers.put('/:id', controllerPlayer.updatePlayer)
routerPlayers.delete('/:id', controllerPlayer.deletePlayer)

routerPlayers.post('/club/:id', controllerPlayer.getPlayersInClub)
routerPlayers.put('/:id/register/club', controllerPlayer.registerPlayerInClub)
routerPlayers.put('/:id/unregister/club', controllerPlayer.unregisterPlayerInClub)


module.exports = routerPlayers