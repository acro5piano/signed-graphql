const gql = literals => literals[0]

export const getUsers = gql`
  query getUsers {
    name
    email
  }
`

export const updateUser = gql`
  query updateUser(id: 1, name: "Bob") {
    name
    email
  }
`

export const notGql = gql`
  Hello, I am just template string
`
