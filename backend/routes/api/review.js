const express = require('express')
const { Review } = require('../../db/models')

const router = express.Router()

router.get('/', async (req, res) => {
    console.log('happening')
    const reviews = await Review.findAll()
    const vals = reviews.map(review => review.dataValues)
    res.json(vals)
})

module.exports = router;
