const { Post } = require('../models')

function get (req, res, next) {
  const posts = Post.get()
  res.json({ posts })
}

function create (req, res, next) {
  const result = Post.create(req.body)
  res.status(201).json({ post: result })
}

function show (req, res, next) {
  const result = Post.find(req.params.id)
  res.json({ post: result })
}

function destroy (req, res, next) {
  const result = Post.destroy(req.params.id)
  res.json({ post: result })
}

function patch (req, res, next) {
  const result = Post.patch(req.params.id, req.body)
  res.json({ post: result })
}

module.exports = {
  get, create, show, destroy, patch
}
