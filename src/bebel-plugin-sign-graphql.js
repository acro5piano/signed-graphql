const transform = require('./transform')

module.exports = () => {
  return {
    name: 'ast-transform', // not required
    visitor: {
      TemplateElement(path) {
        transform(process.env.ENCRYPT_GRAPQHL_SECRET)(path)
      },
    },
  }
}
