const asyncHandler = require('express-async-handler');
const express = require('express')
const { setTokenCookie } = require('../../utils/auth.js');
const { User, Place } = require('../../db/models');
const { requireAuth, restoreUser } = require('../../utils/auth.js');
const sessionRouter = require('./session')
const usersRouter = require('./users')
const placesRouter = require('./places')
const bookingRouter = require('./booking');
const reviewsRouter = require('./review')

const router = require('express').Router()

router.get('/', async (req, res) => {
const places = await Place.findAll();
res.json(places);
})

router.use('/session', sessionRouter)
router.use('/users', usersRouter)
router.use('/places', placesRouter)
router.use('/bookings', bookingRouter)
router.use('/reviews', reviewsRouter)



module.exports = router
