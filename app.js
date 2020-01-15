const express = require('express')
require('dotenv').config()
const topicRoutes = require('./routes/topic').router

const app = express()

// Setup router

// middleware biar bisa nerima body sebagai json, pengganti package body parser
// attach property `body` ke parameter req
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(topicRoutes)

app.listen(process.env.PORT || 8080)
