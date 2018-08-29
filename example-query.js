const gql = literals => literals[0];

export const getUsers = gql`eyJhbGciOiJIUzI1NiJ9.CiAgcXVlcnkgZ2V0VXNlcnMgewogICAgbmFtZQogICAgZW1haWwKICB9Cg.rANjKL1ijf3wHe91w4giPTn5PFSYLXnXzNzbg5Szt7U`;
export const updateUser = gql`eyJhbGciOiJIUzI1NiJ9.CiAgcXVlcnkgdXBkYXRlVXNlcihpZDogMSwgbmFtZTogIkJvYiIpIHsKICAgIG5hbWUKICAgIGVtYWlsCiAgfQo.LgoVSf3IEQGihBgzhObvi8AaB6VoHdrMpY0QSlUtv0c`;
export const notGql = gql`
  Hello, I am just template string
`;