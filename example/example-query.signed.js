const gql = literals => literals[0];

export const getUsers = gql`eyJhbGciOiJIUzI1NiJ9.CiAgcXVlcnkgZ2V0VXNlcnMgewogICAgbmFtZQogICAgZW1haWwKICB9Cg.GRFoVNHpY12mX0UI1y_nCRwGqKST4UkAbx88hZ2Jccg`;
export const updateUser = gql`eyJhbGciOiJIUzI1NiJ9.CiAgcXVlcnkgdXBkYXRlVXNlcihpZDogMSwgbmFtZTogIkJvYiIpIHsKICAgIG5hbWUKICAgIGVtYWlsCiAgfQo.PZF-UCoKT1tCcF8ZXbKB0GVIjLuHako5m8REBSF3cJA`;
export const notGql = gql`
  Hello, I am just template string
`;