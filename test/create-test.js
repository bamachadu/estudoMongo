const assert = require('assert')
const User = require('../src/user')

describe('Creating records', () => {
  it('save user', (done) => {
    const breno = new User({name: 'Breno'})
    breno.save()
      .then (() => {
        //has been saved sucessfully
        assert(!breno.isNew)
        done()
      })
  })
})