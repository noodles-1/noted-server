import 'dotenv/config'

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { router } from './api.js'
const app = express()
const PORT = process.env.PORT

const corsConfig = {
    origin: process.env.CLIENT_URL
}

app.use(cors(corsConfig))
app.use(bodyParser.json())
app.use('/api', router)

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))