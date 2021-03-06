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
mongoose.connect(process.env.DB, () => console.log('connected to DB'))

// listen to server
app.listen(process.env.PORT || 3000, () => console.log('listening to port'))