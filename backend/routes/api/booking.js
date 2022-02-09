const express = require('express')
const { Booking, Place } = require('../../db/models')

const router = express.Router()

router.get('/', async (req, res) => {
    const bookings = await Booking.findAll();
    const vals = bookings.map(booking => booking.dataValues)
    res.json(vals)
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const bookings = await Booking.findAll({
        where: { userId: id },
        include: Place
    })
    const vals = bookings.map(booking => booking.dataValues)
    res.json(vals)
})

router.post('/', async (req, res) => {
    const booking = await Booking.create(req.body)
    res.json(booking)
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const booking = await Booking.findByPk(id)
    await booking.destroy()
    return res.json({id})
})

module.exports = router;
