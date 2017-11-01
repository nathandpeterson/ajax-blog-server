const { post } = require('../models')

function get (req, res, next) {
  const posts = post.get()
  res.json({ posts })
}

function create (req, res, next) {
  const result = post.create(req.body)
  res.json({ post: result })
}

module.exports = {
  get, create
}
