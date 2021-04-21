
const express = require('express')
const app = express()
const {readFile} = require('fs')

const PORT = 3010

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))




app.get('/' , (req,res) => {
    readFile('./index.html' , 'utf8', (err , html) => {
        res.send(html)
})

})

app.get('/contact' , (req,res) => {
    readFile('./contact.html' , 'utf8', (err , html) => {
        res.send(html)
})

})

app.get('/about' , (req,res) => {
    readFile('./about.html', 'utf8', (err , html) => {
        res.send(html)
})

})
app.get('*', (req,res) => {
    readFile('error.html', 'utf8' , (err , html) => {
        res.send(html)
})

})





app.listen(PORT, () => console.log(`listening on ${PORT}`))