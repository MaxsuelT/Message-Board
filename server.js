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


app.get('/', (req, res) =>{
    
    // try{
    //     const message = new Message()
    //     console.log(message)
    //     res.render('messages/index', {messages: message })
    // }
    // catch (e){
    //     console.log(e)
    // }
   
    res.render('messages/index',{ messages: [
        {
            title: 'First Card',
            author: 'Max',
            message: 'First Message',
            createdAt: new Date(Date.now()),
            hastag: "#tag 1, #tag2"
        },
        
    ]})
})
  

app.use('/message', messageRouter)



app.listen(5000, () =>{
    console.log(`Server running on port ${5000}`)
})