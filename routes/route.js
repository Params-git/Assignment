const express = require("express");
const route = new express.Router();
const item = require("../model/schema");



route.get('/', (req, res) => {
    res.status(200).render("index");
})


route.get('/products', async (req, res) => {
    try {
        const data = await item.find();
        res.status(200).send(data);
        console.log(data);
    } catch (e) {
        res.status(400).send(e);
    }
})

route.get('/products/id/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const data = await item.find({ id: id });
        res.status(200).send(data);
        console.log(data);
    } catch (e) {
        res.status(400).send(e);
    }
})


route.post('/products', async (req, res) => {
    const Itemdata = new item(req.body);
    try {
        const data = await Itemdata.save();
        res.status(201).send(data);
    }
    catch (e) {
        res.status(400).send(e);
    }
});


route.patch("/products/id/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const updatedData = await item.findByIdAndUpdate({_id: id }, req.body, {
            new: true
        })
        res.status(201).send(updatedData);
    } catch (e) {
        res.status(400).send(e);
    }
})


route.put("/products/id/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const updatedData = await item.findOneAndUpdate({_id: id }, req.body, {
            new: true
        })
        res.status(201).send(updatedData);
    } catch (e) {
        res.status(400).send(e);
    }
})


route.delete('/products/id/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deletedData = await item.findByIdAndDelete({_id: id });
        res.status(200).send(deletedData);
        console.log(deletedData);
    } catch (e) {
        res.status(400).send(e);
    }
})


module.exports = route;