const express = require('express')
const corsMiddleware = require('./middlewares/corsMiddleware')
const errorHandler = require('./middlewares/errorMiddleware')
const authRoutes = require('./routes/authRoutes')
const serviceRoutes = require('./routes/serviceRoutes')
const cookieParser = require('cookie-parser')

require('dotenv').config()
const swaggerDocs = require('./swagger')

const app = express()
const PORT = process.env.PORT || 3003

app.use(cookieParser())
app.use(express.json())
app.use(corsMiddleware)
app.use(errorHandler)

app.use('/auth', authRoutes)
app.use('/services', serviceRoutes)

swaggerDocs(app)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
