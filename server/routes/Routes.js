const express = require('express');
const Question = require("../models/Question")
const Service = require("../models/Service")
const router = express.Router();

router.post('/question', async (req, res) => {
    const { name, email, content } = req.body;
    console.log("ques")
    try {
        const question = new Question({ name, email, content });
        await question.save();
        res.status(200).json({ message: 'Question saved successfully', question });
    } catch (error) {
        res.status(500).json({ message: 'Error saving question', error });
        console.log("1111111111111")
    }
});

router.post('/service', async (req, res) => {
    const { question, items, totalTime, totalPrice } = req.body;
    console.log(req.body)
    if (!question || !items || !totalTime || !totalPrice) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    console.log(req.body)
    try {
        const service = new Service({  question, items, totalTime, totalPrice });
        await service.save();
        res.status(201).json({ message: 'Service saved successfully', service });
    } catch (error) {
        res.status(500).json({ message: 'Error saving service', error });
        console.log(error)
    }
});

router.get('/get/services', async (req, res) => {
    try{
        const services = await Service.find();
        console.log('Fetched questions:', services);
        res.status(200).json(services)
    }catch (error){
        res.status(500).json({ message: 'Error saving service', error });
    }

})

router.get('/get/questions', async (req, res) => {
    try{
        const questions = await Question.find();
        console.log('Fetched questions:', questions);
        res.status(200).json(questions)
    }catch (error){
        res.status(500).json({ message: 'Error saving service', error });
    }

})


module.exports = router;