const express = require("express")
const mongoose = require("mongoose")
const messageRouter = require("./routes/message")
const Message = require("./models/messagesModel")
const app = express()


mongoose.connect('mongodb://localhost:27017/message')
.then(() => {console.log("Connected to the DB")})
.catch((e) => {console.log(e)})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

app.get('/', async (req, res) =>{
    let messages =  await Message.find()
    res.render('messages/index', {messages: messages})
    // res.render('messages/index',{messages: messages})
    // const messages = [
    //     {
    //     title: 'First Title',
    //     author: 'Max',
    //     createdAt: new Date(Date.now()),
    //     message: 'First Message',   
    //     // hastag: "#tag 1, #tag2"
    //     },
    //     {
    //         title: 'Second Title',
    //         author: 'Maria',
    //         createdAt: new Date(Date.now()),
    //         message: 'Seconnd Message',   
    //     // hastag: "#tag 1, #tag2"
    //     }
//   ]
   
   
        
})
  

app.use('/message', messageRouter)



app.listen(5000, () =>{
    console.log(`Server running on port ${5000}`)
})