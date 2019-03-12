var chai = require('chai')

chai.use(function (chai, utils) {
  chai.Assertion.overwriteProperty('be', function (_super) {
    return function () {
      var be = function (x) {
        var obj = utils.flag(this, 'object')
        if (typeof x != 'undefined') {
          if (utils.flag(this, 'negate')) {
              new chai.Assertion(obj).to.not.deep.equal(x)
          } else {
              new chai.Assertion(obj).to.deep.equal(x)
          }
        }
        _super.apply(this, arguments)
      }
      be.__proto__ = this
      return be
    }
  })
})

module.exports = chai
