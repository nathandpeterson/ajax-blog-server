const fs = require('fs')
const { post } = require('../../models')

describe('Post', function () {
  beforeEach(function () {
    fs.writeFileSync(global.db, '[]')
  })

  describe('#get()', function () {
    it('should return all posts', function () {
      const actual = post.get()
      const expected = []

      expect(actual).to.deep.equal(expected)
    })
  })
})
