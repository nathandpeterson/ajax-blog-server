const express = require('express')
const router = express.Router()
const { PostsController: ctrl } = require('../controllers')

router.get('/', ctrl.get)
router.get('/:id', ctrl.show)
router.post('/', ctrl.validations.prune, ctrl.validations.complete, ctrl.create)
router.put('/:id', ctrl.patch)
router.patch('/:id', ctrl.patch)
router.delete('/:id', ctrl.destroy)

module.exports = router
