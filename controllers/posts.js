const { post } = require('../models')

function get (req, res, next) {
  const posts = post.get()
  res.json({ posts })
}

module.exports = {
  get
}
