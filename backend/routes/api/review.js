const express = require('express')
const { Review } = require('../../db/models')

const router = express.Router()

router.get('/', async (req, res) => {
    console.log('happening')
    const reviews = await Review.findAll()
    const vals = reviews.map(review => review.dataValues)
    res.json(vals)
})

router.post('/', async (req, res) => {
    const review = await Review.create(req.body)
    res.json(review)
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const review = await Review.findByPk(id)
    review.set(req.body)
    await review.save()
    res.json(review)
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const review = await Review.findByPk(id)
    await review.destroy()
    return res.json({id})
})

module.exports = router;
