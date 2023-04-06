const express = require("express")
const Message = require('./../models/messagesModel')
const router = express.Router()


router.get('/new', (req, res) =>{
    res.render('messages/newMessage', {message: new Message()})
})


router.post('/', async (req, res) =>{
    let message = new Message({
        title: req.body.title,
        author: req.body.author,
        message: req.body.message
    })
    try{
        message = await message.save()
        res.redirect('/')
    }
    catch(e){
        res.render('messages/newMessage', {message: message})
    }
    
})

router.delete('/:id', async (req, res) =>{
    await Message.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

module.exports = router