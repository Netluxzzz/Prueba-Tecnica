const app = require('./app')

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`)
  console.log(`Application name: ${app.get('name')}`)
})


