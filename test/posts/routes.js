const fs = require('fs')
describe('post routes', function () {
  beforeEach(function () {
    fs.writeFileSync(global.db, '[]')
  })

  describe('GET /', function () {
    it('should return all posts', function (done) {
      const expected = { posts: [] }
      chai.request(app)
        .get('/posts')
        .end((err, res) => {
          expect(res.status).to.equal(200)
          expect(res.body).to.deep.equal(expected)
          done()
        })
    })
  })
})
