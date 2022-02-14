const express = require('express');
const { Place } = require('../../db/models')
//const { Op } = require("sequelize");

const router = express.Router()

router.post('/', async (req, res) => {
    const place = await Place.create(req.body)
    res.json(place)
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const place = await Place.findByPk(id)
    place.set(req.body)
    await place.save()
    res.json(place)
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const place = await Place.findByPk(id);
    console.log('PLACE!!!!!', place)
    await place.destroy();
    return res.json({ id })
})

module.exports = router;
