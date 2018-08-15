const { encryptGql, decryptGql } = require('../dist')

const SECRET = 'secret'

const QUERY = `
  query getUser {
    name
    email
  }
`

const ENCRYPTED_QUERY = encryptGql('SECRET', 'production')`
  query getUser {
    name
    email
  }
`

console.log(ENCRYPTED_QUERY)

it('can encrypt', () => {
  const normal = encryptGql(SECRET, 'development')(QUERY)
  expect(normal).toEqual(QUERY)

  const encrypted = encryptGql(SECRET, 'production')(QUERY)
  expect(encrypted).not.toEqual(QUERY)

  const decrypted = decryptGql(SECRET, 'production')(QUERY)
  expect(decrypted).toEqual(QUERY)
})
