const express = require('express')
const router = express.Router()
const { posts: ctrl } = require('../controllers')

router.get('/', ctrl.get)
router.post('/', ctrl.create)

module.exports = router
