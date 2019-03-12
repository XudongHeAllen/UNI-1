should = require('./index').should()

describe('clay-chai', function () {
  describe('be()', function () {
    it('succeeds', function () {
      a = {a: 'a', b: 'b'}
      b = {a: 'a', b: 'b'}

      a.should.be(b)
    })

    it('fails', function () {
      a = {a: 'a', b: 'b'}
      b = {b: 'b'}
      try {
        a.should.be(b)
      } catch(e) {
        return
      }
      throw new Error('expected error')
    })
  })

  describe('not.be()', function () {
    it('succeeds', function () {
      a = {a: 'a', b: 'b'}
      b = {b: 'b'}

      a.should.not.be(b)
    })

    it('fails', function () {
      a = {a: 'a', b: 'b'}
      b = {a: 'a', b: 'b'}
      try {
        a.should.not.be(b)
      } catch(e) {
        return
      }
      throw new Error('expected error')
    })
  })

})
