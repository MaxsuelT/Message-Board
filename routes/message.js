const express = require("express")
const Message = require('./../models/messagesModel')
const router = express.Router()


router.get('/new', (req, res) =>{
    res.render('messages/newMessage', {message: new Message()})
})


// edit

router.get('/edit/:id', async (req, res) =>{
    try{
        const message = await Message.findById(req.params.id)
         res.render('messages/edit', {message: message})
    }
    catch (e){
        console.log(e)
    }
   
})


router.put("/:id", async(req, res) =>{
    let message = await Message.findById(req.params.id)
    message.title = req.body.title
    message.author = req.body.author
    message.message = req.body.message
    
    try{
      await message.save()
      res.redirect('/')
    }
    catch(e){
        res.end()
    }


    // let message = new Message({
    //     title: req.body.title,
    //     author: req.body.author,
    //     message: req.body.message
    // })
    // try{
    //     message = await message.save()
    //     res.redirect('/')
    // }
    // catch(e){
    //     res.render('messages/newMessage', {message: message})
    // }
})


// Post

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



// delete router

router.delete('/:id', async (req, res) =>{
    await Message.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

module.exports = router