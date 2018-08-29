# graphql-encrypt

Create prebuild encrypted GraphQL.

# Install

```
npm install --save-dev graphql-encrypt
```

or if you use yarn:

```
yarn add -D graphql-encrypt
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

Run the following command to encrypt the gql:

```
$ npm run graphql-encrypt --secret foo example-query.js

export const getUsers = gql`eyJhbGciOiJIUzI1NiJ9.CiAgcXVlcnkgZ2V0VXNlcnMgewogICAgbmFtZQogICAgZW1haWwKICB9Cg.rANjKL1ijf3wHe91w4giPTn5PFSYLXnXzNzbg5Szt7U`;
```

to overwrite the file, add `--write` option:

```
$ npm run graphql-encrypt --secret foo --write example-query.js
```

# TODO

- [ ] add unit test
- [ ] show console help
- [ ] decrypt for convenience
