const path = require('path')
const { JSONMecha } = require('mecha-js')
const env = process.env.NODE_ENV || 'development'
const db = path.join(__dirname, '..', 'db', `${env}.json`)
const posts = new JSONMecha(db)

function get () {
  return posts.get()
}

module.exports = {
  get
}
