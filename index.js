import 'dotenv/config'

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { router } from './api.js'

const corsConfig = {
    origin: 'http://localhost:3000'
}

const app = express()
const PORT = process.env.PORT

app.use(cors(corsConfig))
app.use(bodyParser.json())
app.use('/api', router)

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))