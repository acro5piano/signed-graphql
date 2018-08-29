import { encryptGql } from './'

const SECRET = 'secret'

export const getUsers = encryptGql(SECRET)`
  query getUsers {
    name
    email
  }
`
