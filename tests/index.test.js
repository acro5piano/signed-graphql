const { transformAsync } = require('@babel/core')
const path = require('path')
const { sign } = require('jsonwebtoken')

const SECRET = 'SECRET'
process.env.ENCRYPT_GRAPQHL_SECRET = SECRET

const plain = `
const query = \`
  query getUser {
    name
    email
  }
\`
`

const signed = `const query = \`eyJhbGciOiJIUzI1NiJ9.CiAgcXVlcnkgZ2V0VXNlciB7CiAgICBuYW1lCiAgICBlbWFpbAogIH0K.ucj84AQ-Rmt3ND4_v7ut8cVCRCsOw4eeUHNfM-w8VAw\`;`

describe('transform', () => {
  it('can sign', async () => {
    const { code } = await transformAsync(plain, {
      plugins: [path.resolve(__dirname, '../src/bebel-plugin-sign-graphql.js')],
    })
    expect(code).toEqual(signed)
  })
})
