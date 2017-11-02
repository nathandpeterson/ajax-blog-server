const { Post } = require('../models')
const fields = [ 'title', 'content' ]

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

function prune (req, res, next) {
  Object.keys(req.body).forEach(key => {
    if (!fields.includes(key)) delete req.body[key]
  })

  next()
}

function complete (req, res, next) {
  const errors = fields.filter(field => !req.body[field])
    .map(key => `${key} is a required field`)

  if (errors.length) {
    const status = 400
    const message = `Fields are missing: ${errors.join(', ')}`
    return next({ status, message })
  }

  return next()
}

module.exports = {
  get, create, show, destroy, patch,
  validations: { prune, complete }
}
