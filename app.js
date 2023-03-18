const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.listen(3000, () => console.log('listening'))

app.get('/', (req, res) => {
    res.sendFile('./countries.json', { root: __dirname})
})