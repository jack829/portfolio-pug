const express = require('express')
const path = require('path')
const info = require('./info.js')

const app = express()
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', function(req, res) {
  res.render('profile', { aboutMe: info.about })
})

app.get('/projects', function(req, res) {
  res.render('projects', { projects: info.projects })
})

app.listen(3000, function () {
  console.log('listening on port 3000')
})


