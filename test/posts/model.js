const fs = require('fs')
const { post:Post } = require('../../models')

describe('Post', function () {
  describe('#get()', function () {
    it('should return all posts', function () {
      const actual = Post.get()
      const expected = []

      expect(actual).to.deep.equal(expected)
    })
  })

  describe('#create(body)', function () {
    it('should return all posts', function () {
      const actual = Post.create({ title: 'xxx', content: 'yyy' })

      expect(actual.id).to.be.ok
      expect(actual.title).to.deep.equal('xxx')
      expect(actual.content).to.deep.equal('yyy')
    })
  })

  describe('#find(id)', function () {
    it('should find the specified post', function () {
      const post = { id: 1, title: 'xxx', content: 'yyy' }
      fs.writeFileSync(global.db, JSON.stringify([ post ]))
      const actual = Post.find(1)

      expect(actual).to.deep.equal(post)
    })
  })
})
