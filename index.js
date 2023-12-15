require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const PORT = process.env.PORT

app.use(bodyParser.json())
app.use('/api', require('./api'))

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))