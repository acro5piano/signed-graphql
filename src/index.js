const { transformAsync } = require('@babel/core')
const fs = require('fs')
const path = require('path')

exports.run = argv => {
  process.env.ENCRYPT_GRAPQHL_SECRET = argv.secret
  const files = argv._

  const permissions = argv.write ? fs.constants.F_OK | fs.constants.W_OK : fs.constants.F_OK
  Promise.all(
    files.map(file => {
      return new Promise(resolve => {
        fs.access(file, permissions, err => {
          if (err) {
            throw new Error(`the file "${err.path}" does not exist or cannot write out.`)
          }
          resolve()
        })
      })
    }),
  ).then(() => {
    files.forEach(file => {
      fs.readFile(file, 'utf8', (err, content) => {
        const { code } = transformAsync(content, {
          plugins: [path.resolve(__dirname, './bebel-plugin-encrypt-graphql.js')],
        }).then(({ code }) => {
          if (argv.write) {
            fs.writeFile(file, code, 'utf8', err => err && console.error(err))
          } else {
            console.log(code)
          }
        })
      })
    })
  })
}
