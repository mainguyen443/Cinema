const express= require('express')
const router= express.Router()
const movieController= require('../../controller/movieController')

router.post('/create', async function(req, res){
    try {
        let data = req.body // lay data tu request body
        let response= await movieController.createMovie(data)
        res.send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})
    }
})

router.get('/', async function(req, res){
    try {
        let response= await movieController.getListMovie()
        res.send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})
    }
})

module.exports= router
