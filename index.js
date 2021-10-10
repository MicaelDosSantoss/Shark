
const express = require('express')
const app = express()
const rotas = require('./routes/index')

app.use(rotas)

app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.set('view engine',"ejs")


app.listen(3000, () => {
    console.log("server rondando")
})