const express = require('express')
const router = express.Router()
const userController = require('../../controller/userController')

router.post('/signup', async function (req, res) {
    try {
        let data = req.body // lay data tu request body
        let response = await userController.userSignUp(data)
        res.send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: error })
    }
})

router.post('/login', async function (req, res) {
    try {
        let data = req.body // lay data tu request body
        let response = await userController.checkLogin(data)
        // if (response.user) {
        //     req.session.email = response.user.email
        // }
        res.send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: error })
    }
})

module.exports = router
