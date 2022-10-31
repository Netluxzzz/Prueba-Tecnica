const express = require('express')
const morgan = require('morgan')
const dbConnection = require('./db.connection')
const routerPlayers = require('./routes/players.routes')
const routerManagers = require('./routes/managers.routes')
const routerClubs = require('./routes/clubs.routes')
const app = express()

//Settings
app.set('port', process.env.port || 3500)
app.set('name', 'Cloud-District-Technical-Test')

//Middlewares
app.use(express.json())
app.use(morgan('common'))

//DataBase Connection
dbConnection()


//Routing
app.use(express.static('public'))

//Players
app.use('/api/players', routerPlayers)

//Managers
app.use('/api/managers', routerManagers)

//Clubs
app.use('/api/clubs', routerClubs)

module.exports = app