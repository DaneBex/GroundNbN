const express = require('express')
const { Place } = require('../../db/models')

const router = express.Router()


router.post('/', async (req, res) => {
    const place = await Place.create(req.body)
    res.json(place)
})

router.put('/:id', async (req, res) => {
    console.log('UPDATE!!!!!!!!!', req.body)
    const id = req.params.id
    const place = await Place.findByPk(id)
    place.set(req.body)
   await place.save()
    res.json(place)
})

module.exports = router;
