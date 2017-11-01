const fs = require('fs')
const { post } = require('../../models')

describe('Post', function () {
  describe('#get()', function () {
    it('should return all posts', function () {
      const actual = post.get()
      const expected = []

      expect(actual).to.deep.equal(expected)
    })
  })

  describe('#create(body)', function () {
    it('should return all posts', function () {
      const actual = post.create({ title: 'xxx', content: 'yyy' })

      expect(actual.id).to.be.ok
      expect(actual.title).to.deep.equal('xxx')
      expect(actual.content).to.deep.equal('yyy')
    })
  })
})
