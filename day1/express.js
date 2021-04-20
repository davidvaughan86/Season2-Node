const http = require('http')
const express = require('express')
const app = express ()
const {readFile} = require('fs')

const PORT = 3006


app.get('/', (req,res) => {
    res.end('i dont have to stop the server when we save')
})

app.get('/text', (req,res) => {
    readFile('./node.html', 'utf8', (err, html) => {
        res.send(html)
    })
})
app.get('/text2', (req,res) => {
    readFile('./express.html', 'utf8', (err, html) => {
        res.send(html)
    })
})

app.get('/anotherplace', (req,res) => {
    res.end('hello from another place')
})

app.get('/username', (req,res) => {
    const username = {user : 'david'}
    res.send(username.user)
})


app.listen(PORT , () => {
    console.log(`app is listening on ${PORT}`)
})
