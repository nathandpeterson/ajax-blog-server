const path = require('path')
const env = process.env.NODE_ENV || 'test'

global.app = require('../app')
global.chai = require('chai')
global.expect = chai.expect
global.db = path.join(__dirname, '..', 'db', `${env}.json`)

chai.use(require('chai-http'))
