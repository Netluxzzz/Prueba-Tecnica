const { Router } = require('express')
const routerManagers = Router()
const controllerManager = require('../controllers/managers.controller')

routerManagers.get('/', controllerManager.getAll)
routerManagers.get('/:id', controllerManager.getManager)
routerManagers.post('/', controllerManager.addManager)
routerManagers.put('/:id', controllerManager.updateManager)
routerManagers.delete('/:id', controllerManager.deleteManager)

routerManagers.post('/club/:id', controllerManager.getManagersInClub)
routerManagers.put('/:id/register/club', controllerManager.registerManagerInClub)
routerManagers.put('/:id/unregister/club', controllerManager.unregisterManagerInClub)

module.exports = routerManagers