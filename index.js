import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import messageRoute from './Routes/message.js'


dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use(express.urlencoded({ extended: false }));


app.use('/api/messages', messageRoute)


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)