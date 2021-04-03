const { sign, verify } = require('jsonwebtoken')

module.exports = secret => path => {
  if (!secret) {
    throw new Error('secret not set.')
  }
  if (/[\n ]*query|mutation|subscription/.test(path.node.value.raw)) {
    path.node.value = {
      raw: sign(path.node.value.raw, secret),
      cooked: sign(path.node.value.cooked, secret),
    }
  }
}
