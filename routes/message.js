const express = require("express")
const router = express.Router()


router.get('/new', (req, res) =>{
    // res.send('new message')
    res.render('messages/newMessage')
})

router.post('/', (req, res) =>{
    res.send('Message successfully sent to the server')
})

module.exports = router