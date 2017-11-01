const fs = require('fs')
const path = require('path')

global.app = require('../app')
global.chai = require('chai')
global.expect = chai.expect

require('mocha')
chai.use(require('chai-http'))

global.db = path.join(__dirname, '..', 'db', 'test.json')
const clear = () => fs.writeFileSync(db, JSON.stringify([]))

beforeEach(clear)
afterEach(clear)
