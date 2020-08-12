[![npm version](https://badge.fury.io/js/graphql-encrypt.svg)](https://badge.fury.io/js/graphql-encrypt.svg)

# signed-graphql

A cli tool to make GraphQL encrypted.

# Why

GraphQL is a great tool, but the query is open to public by default. Of course, we should set GraphQL server secure by server-side logic. However, we may not confortable if someone find a security hole and query it.

With signed-graphql, we can verify that our queries is made by specific people, and accept only signed queries.

# Install

```
npm install --save-dev signed-graphql
```

or if you use yarn:

```
yarn add -D signed-graphql
```

# Usage

Assume `example-query.js` looks like this:

```js
export const getUsers = gql`
  query getUsers {
    name
    email
  }
`
```

Run the following command to sign the gql:

```
$ npm run graphql-encrypt --secret foo example-query.js

export const getUsers = gql`eyJhbGciOiJIUzI1NiJ9.CiAgcXVlcnkgZ2V0VXNlcnMgewogICAgbmFtZQogICAgZW1haWwKICB9Cg.GRFoVNHpY12mX0UI1y_nCRwGqKST4UkAbx88hZ2Jccg`
```

to overwrite the file, add `--write` option:

```
$ npm run graphql-encrypt --secret foo --write example-query.js
```

Note: `--secret` is required args. Please keep it secret.

# Next Step

On the server side, decrypt the query. Node.js example:

```js
const { verify } = require('jsonwebtoken')

// assuming
// req.body.query = 'eyJhbGciOiJIUzI1NiJ9.CiAgcXVlcnkgZ2V0VXNlcnMgewogICAgbmFtZQogICAgZW1haWwKICB9Cg.GRFoVNHpY12mX0UI1y_nCRwGqKST4UkAbx88hZ2Jccg'

app.post('/graphql', (req, res) => {
  const query = verify(req.body.query, 'foo')
  // => '\n  query getUsers {\n    name\n    email\n  }\n'
})
```

# Thanks

Oridinally inspired by: https://itnext.io/graphql-data-hiding-using-apollo-stack-ad1ea92fa85c

# TODO

- [ ] add unit test
- [ ] show console help
- [ ] decrypt for convenience
