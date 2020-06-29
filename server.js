const express = require('express')
const server = express()
const projectsRouter = require('./projects/router-projects')

server.use(express.json())
server.use(projectsRouter)

module.exports = server