const fs = require('fs')
const uuid = require('uuid/v4')

describe('post routes', function () {
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

    it('should create a new post', function (done) {
      const post = { title: 'xxx', content: 'yyy' }
      chai.request(app)
        .post('/posts')
        .send(post)
        .end((err, res) => {
          expect(res.status).to.equal(200)
          expect(res.body.post.id).to.be.ok
          expect(res.body.post.title).to.deep.equal('xxx')
          expect(res.body.post.content).to.deep.equal('yyy')
          done()
        })
    })

    it('should retrieve a specific post', function (done) {
      const post = { id: uuid(), title: 'xxx', content: 'yyy' }
      fs.writeFileSync(db, JSON.stringify([ post ]))

      chai.request(app)
        .get(`/posts/${post.id}`)
        .end((err, res) => {
          expect(res.status).to.equal(200)
          expect(res.body.post).to.deep.equal(post)
          done()
        })
    })
  })
})
