# graphql-encrypt

create prebuild encrypted GraphQL

# Demo

```
$ node

> queries = require('./dist/example-query')
{ getUsers: '\n  query getUsers {\n    name\n    email\n  }\n' }

> require('./dist').dump('secret', 'production')(queries)
[ { getUsers:
     'eyJhbGciOiJIUzI1NiJ9.CiAgcXVlcnkgZ2V0VXNlcnMgewogICAgbmFtZQogICAgZW1haWwKICB9Cg.oqyeTL2Mpu59XLS-7FWDdSCHUGwZdfSmu_TkNgXQ54I' } ]
```
