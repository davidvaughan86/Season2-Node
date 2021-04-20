// npm init -y
// npm install express

const express = require('express')
const app = express()


app.use(express.json())




app.get('/', (req,res) => {
    res.send('home')
})


app.post('/faq', (req,res) => {
    const {name, height, weight } = req.body[3]
    //the type of data structure sent is the type returned. modify the req.body for arrays and objects respectively
    // const named = req.body.filter(record => record.name.includes('david'))
    // console.log(named)
    
    console.log(req.body)
    res.send(`your name is  ${name}  and you are ${height} tall and you weigh ${weight}`)
    

    
    
})

app.get('/team', (req,res) => {
    res.send('team')
})

app.get('/about', (req,res) => {
    res.send('about')
})

app.get('*', (req,res) => {
    res.send('404 error')
})




app.listen(6006, () => console.log('running on 6006')
)