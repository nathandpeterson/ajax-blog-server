const fs = require('fs')
const path = require('path')
const uuid = require('uuid/v4')
const env = process.env.NODE_ENV || 'development'
const db = path.join(__dirname, '..', 'db', `${env}.json`)

function _read () {
  return JSON.parse(fs.readFileSync(db, 'utf-8'))
}

function _write (obj) {
  fs.writeFileSync(db, JSON.stringify(obj))
}

function get () {
  return _read()
}

function create (body) {
  const id = uuid()
  const posts = _read()
  const post = { id, ...body }

  posts.push(post)
  _write(posts)

  return post
}

module.exports = {
  get, create
}
