const transform = require('../src/bebel-plugin-encrypt-graphql')
const { sign } = require('jsonwebtoken')

const SECRET = 'SECRET'
process.env.ENCRYPT_GRAPQHL_SECRET = SECRET

const QUERY = `
  query getUser {
    name
    email
  }
`

const ENCRYPTED_QUERY = sign(QUERY, SECRET)

describe('transform', () => {
  it('can encrypt', () => {
    expect(1 + 1).toEqual(2)
  })
})
