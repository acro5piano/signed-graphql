import { sign, verify } from 'jsonwebtoken'

const ENV = process.env.NODE_ENV || 'development'

export const encryptGql = (secret: string, env: string = ENV) => (literals: string | TemplateStringsArray) => {
  const query = Array.isArray(literals) ? literals[0] : literals
  if (env === 'production') {
    return sign(query, secret)
  }
  return query
}

export const decryptGql = (secret: string, env: string = ENV) => (query: string) => {
  if (ENV === 'production') {
    return verify(query, secret)
  }
  return query
}

export const dump = (secret: string, env: string) => (queries: object) => {
  const encrypted = Object.keys(queries).map(k => ({ [k]: encryptGql(secret, env)(queries[k]) }))
  console.log(encrypted)
  return encrypted
}
