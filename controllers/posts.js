const { post } = require('../models')

function get (req, res, next) {
  const posts = post.get()
  res.json({ posts })
}

function create (req, res, next) {
  const result = post.create(req.body)
  res.status(201).json({ post: result })
}

function show (req, res, next) {
  const result = post.find(req.params.id)
  res.json({ post: result })
}

function destroy (req, res, next) {
  const result = post.destroy(req.params.id)
  res.json({ post: result })
}

module.exports = {
  get, create, show, destroy
}
