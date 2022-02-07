const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User, Place } = require('../../db/models');
const { requireAuth, restoreUser } = require('../../utils/auth.js');
const sessionRouter = require('./session')
const usersRouter = require('./users')
const placesRouter = require('./places')
const bookingRouter = require('./booking');

const router = require('express').Router()

router.get('/', async (req, res) => {
const places = await Place.findAll();
const vals = places.map(place => place.dataValues)
console.log(vals)
res.json(vals);
})

router.use('/session', sessionRouter)
router.use('/users', usersRouter)
router.use('/places', placesRouter)
router.use('/bookings', bookingRouter)



module.exports = router
