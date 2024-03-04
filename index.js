require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT
// const port = 4000

// console.log(process.env)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Hello twitter!')
  })

app.get('/google', (req,res)=>{
    res.send('Hello Google')
})

app.get('/login', (req,res)=>{
    res.send(`<h1>Please login at backend</h1>`)
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>twitter and code</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})