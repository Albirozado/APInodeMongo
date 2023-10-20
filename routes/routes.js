const express = require('express');
const Model = require("../model/model")

const router = express.Router()

router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})



router.get("/getall", async (req, res)=>{
    try{
        const data = await Model.find()
        res.json(data)

    }
    catch (error){
        res.status(500).json({message: error.message})

    }
})

router.get("/getone/:id", async (req, res)=>{
    try{
        const dataID = await Model.findById(req.params.id)
        res.json(dataID)

    }
    catch (error){
        res.send({message:error.message})


    }
})

router.patch("update/:id", async (req, res)=>{
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }})

router.delete("/delete/:id", async (req, res)=>{
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }})



















module.exports = router;
