const express = require('express')
const router = express.Router()
const { PostsController: ctrl } = require('../controllers')

router.get('/', ctrl.get)
router.post('/', ctrl.validations.prune, ctrl.validations.complete, ctrl.create)
router.get('/:id', ctrl.validations.exists, ctrl.show)
router.put('/:id', ctrl.validations.exists, ctrl.validations.prune, ctrl.validations.complete, ctrl.patch)
router.patch('/:id', ctrl.validations.exists, ctrl.validations.prune, ctrl.patch)
router.delete('/:id', ctrl.validations.exists, ctrl.destroy)

module.exports = router
