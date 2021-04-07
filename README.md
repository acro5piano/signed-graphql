[![npm version](https://badge.fury.io/js/signed-graphql.svg)](https://badge.fury.io/js/signed-graphql.svg)

# signed-graphql

A cli tool to make GraphQL secure. Make a plain query into a JWT signed query.

Sign queries on build time, and verify them on runtime.

# Why

GraphQL is a great tool, but the schema is open to public by default. Of course, we should keep our GraphQL server secure by server-side authorization logic. However, it is possible to create a security hole on a GraphQL server and result in unexpected issues.

With signed-graphql, we can verify queries are signed using shared JWT secret.

# Install

```
npm install --save-dev signed-graphql
```

or if you use yarn:

```
yarn add -D signed-graphql
```

# Usage

### Step 1. Write GraphQL as usual

Assume `example-query.js` looks like this:

```js
const gql = literals => literals[0]

export const getUsers = gql`
  query getUsers {
    id
    name
  }
`
```

Note: do not use `graphql-tag`. Please use plain String.

### Step 2. Sign GraphQL on build time

Run the following command to sign the graphql queries:

```sh
npm run signed-graphql --write --secret foo example-query.js
```

Note: `--secret` is required args. Please keep it secret.

Once you overrite your queries, you can bundle your code as usual. So the whole build step should be like this:

```sh
npm run signed-graphql --write --secret foo src/**/*.js
npm run webpack
```

### Step 3. Verify your queries on runtime

On the server side, verify the query. Node.js (express) example:

```js
const { verify } = require('jsonwebtoken')

// assuming
// req.body.query = 'eyJhbGciOiJIUzI1NiJ9.CiAgcXVlcnkgZ2V0VXNlcnMgewogICAgbmFtZQogICAgZW1haWwKICB9Cg.GRFoVNHpY12mX0UI1y_nCRwGqKST4UkAbx88hZ2Jccg'

app.post('/graphql', (req, res) => {
  const query = verify(req.body.query, 'foo')
  // => '\n  query getUsers {\n    id\n    name\n  }\n'
})
```

# Comparison with Persisted Queries

There is a GraphQL technich called "Persisted Queries". The idea is to create pairs of a hash and a GraphQL query. The main purpose is to improve performance, because hashed string (32-64) is smaller than the actual GraphQL string.

The downside of persisted queries are the lack of flexibility. It requires server side to know the pair of hash/query ahead of time before.

On the other hand, signed-graphql keeps flexibility of front-end and server-side. Since JWT is stateless, we don't have to save anything (other than the JWT secret).

The downside of signed-graphql is performance. You need to verify JWT on every request, which means there is some additional cost on the runtime.

Refereneces:

- https://mercurius.dev/#/docs/persisted-queries
- https://www.apollographql.com/docs/apollo-server/performance/apq/

# Thanks

Oridinally inspired by: https://itnext.io/graphql-data-hiding-using-apollo-stack-ad1ea92fa85c

# TODO

- [x] add unit test
- [ ] show console help
- [ ] convert to plain for debug/convenience
