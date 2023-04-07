const express = require("express")
const mongoose = require("mongoose")
const messageRouter = require("./routes/message")
const Message = require("./models/messagesModel")
const override = require('method-override')
const app = express()


mongoose.connect('mongodb://localhost:27017/message')
.then(() => {console.log("Connected to the DB")})
.catch((e) => {console.log(e)})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(override('_method'))


app.get('/', async (req, res) =>{
    let messages =  await Message.find().sort({
        createdAt: "descending"
    })
    res.render('messages/index', {messages: messages})
        
})


app.use('/message', messageRouter)



app.listen(5000, () =>{
    console.log(`Server running on port ${5000}`)
})