const express = require('express')
const logger = require('./config/logs')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send({ msg: 'Hello' })
})

app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`)
})
