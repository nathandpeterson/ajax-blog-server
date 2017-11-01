const path = require('path')

global.app = require('../app')
global.chai = require('chai')
global.expect = chai.expect
global.db = path.join(__dirname, '..', 'db', 'test.json')

chai.use(require('chai-http'))
