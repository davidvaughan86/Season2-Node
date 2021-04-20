const express = require('express')
const app = express()
const PORT = 4004
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/' , (req, res) => {
    const message = 'this is home'
    res.end(message)
})
const body = {
    name: 'david',
    job: 'teachers assistant'
}
app.post('/home', (req, res) => {
    console.log('got body:', req.body)
    res.sendStatus(200)
})

app.listen(PORT , () => console.log('on port 4004'))