const assert = require('assert')
const User = require('../src/user')

describe('Reading records', () => {
  beforeEach((done) => {
    breno = new User({name: 'Breno'})
    breno.save()
      .then (() => done())
  })

  it('read user', (done) => {
    User.find({name: 'Breno'})
      .then((users) => {
        console.log(users)
        done()
      })
  })
})