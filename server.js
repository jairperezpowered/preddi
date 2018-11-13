const express = require('express')
const app = express()

app.use(express.static(__dirname + '/out'))

app.get('/*', (req, res) => res.sendFile(__dirname + '/out/index.html'))
app.listen(3000, function () {
    console.log('server on port 3000')
})