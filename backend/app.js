// ---------------------------------APPLICATIONS

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const helmet = require('helmet')
require('dotenv').config()

const msgRoutes = require('./routes/messages')
const usrRoutes = require('./routes/users')

// ----------------------------Sécurisation des headers
app.use(helmet())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})

require('./db')
// ----------------------------Transformation de la requête en JSON
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// ----------------------------Local path "images"
app.use('/images', express.static(path.join(__dirname, 'images')))

// ----------------------------Routing
app.use('/api/messages', msgRoutes)
app.use('/api/auth', usrRoutes)

module.exports = app

// TODO
// ADD JOI
