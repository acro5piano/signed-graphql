const { sign } = require('jsonwebtoken')
const babel = require('@babel/core')

const SECRET = process.env.ENCRYPT_GRAPQHL_SECRET

module.exports = () => {
  return {
    name: 'ast-transform', // not required
    visitor: {
      TemplateElement(path) {
        if (!SECRET) {
          throw new Error('process.env.SECRET not set.')
        }
        if (/[\n ]*query|mutation/.test(path.node.value.raw)) {
          path.node.value = {
            raw: sign(path.node.value.raw, SECRET),
            cooked: sign(path.node.value.cooked, SECRET),
          }
        }
      },
    },
  }
}
