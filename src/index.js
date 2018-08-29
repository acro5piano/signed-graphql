const { transformAsync } = require('@babel/core')
const fs = require('fs')

exports.run = argv => {
  process.env.ENCRYPT_GRAPQHL_SECRET = argv.secret
  const files = argv._.slice(1)
  files.forEach(file => {
    fs.readFile(file, 'utf8', (err, content) => {
      const { code } = transformAsync(content, {
        plugins: ['./src/bebel-plugin-encrypt-graphql.js'],
      }).then(({ code }) => {
        if (argv.write) {
          fs.writeFile(file, code, 'utf8', err => err && console.error(err))
        } else {
          console.log(code)
        }
      })
    })
  })
}
