const express = require("express")
const Message = require('./../models/messagesModel')
const router = express.Router()


router.get('/new', (req, res) =>{
    // res.send('new message')
    // creating a new empty instance of the Message Model
    console.log('Empty Model:', new Message())
    res.render('messages/newMessage', {message: new Message()})
})

// async operations
router.post('/', async (req, res) =>{
    console.log("Post route working")
    // const message = await new Message({
    //     title: req.body.title,
    //     author: req.body.author,
    //     message: req.body.message
    // })
    // console.log(message)
})

module.exports = router