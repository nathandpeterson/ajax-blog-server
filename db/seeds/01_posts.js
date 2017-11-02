
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, title: 'welcome to my cheese blog', content: 'this is a blog about cheese'},
        {id: 2, title: 'cheddar', content: 'cheddar is awesome; i love eating it.'},
        {id: 3, title: 'gouda', content: 'gouda is great as well! Is not cheese wonderful?'}
      ])
    })
      .then(function(){
      return knex.raw(`SELECT setval('posts_id_seq', (SELECT MAX(id) FROM posts));`)
    })
  }
