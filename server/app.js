const express = require('express')
const path = require('path')

const app = express()

const pathPublic = path.join(process.cwd(), 'client')
const PORT = 3001

app.use(express.static(pathPublic))

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
