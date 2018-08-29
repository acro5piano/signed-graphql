const transform = require('./transform')

const SECRET = process.env.ENCRYPT_GRAPQHL_SECRET

module.exports = () => {
  return {
    name: 'ast-transform', // not required
    visitor: {
      TemplateElement(path) {
        transform(SECRET)(path)
      },
    },
  }
}
