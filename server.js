const express = require("express")
const mongoose = require("mongoose")
const messageRouter = require("./routes/message")
const app = express()


mongoose.connect('mongodb://localhost:27017/message')
.then(() => {console.log("Connected to the DB")})
.catch((e) => {console.log(e)})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/message', messageRouter)

app.get('/', (req, res) =>{
    res.render('messages/index',{ messages: [
        {
            title: 'First Card',
            author: 'Max',
            message: 'First Message',
            createdAt: new Date(Date.now()),
            hastag: "#tag 1, #tag2"
        },
        {
            title: 'Second Card',
            author: 'John',
            message: 'Second Message',
            createdAt: new Date(Date.now()),
            hastag: "#tag 1, #∆tag2"
        }
    ]})
})
  



    





app.listen(5000, () =>{
    console.log(`Server running on port ${5000}`)
})