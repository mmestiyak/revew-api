require('dotenv/config')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

// import routes
const revewsRoutes = require('./routes/revews')

// middlewares
app.use(cors())
app.use(bodyParser.json())
app.use('/', revewsRoutes)



// connect to db
mongoose.connect(`${process.env.DB}`, (r) => console.log('connected to DB', r))

// listen to server
app.listen(3000, () => console.log('listening to port'))