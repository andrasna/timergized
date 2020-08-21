import React from 'react'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql,
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

const getUsers = gql`
  {
    users {
      _id
      name
      email
    }
  }
`

function ListOfUsers() {
  const {data} = useQuery(getUsers)

  if (!data) return null 

  return(
    <ul>
      {data.users.map((user, i) => (
        <li key={i}>{user.name} {user.email}</li>
      ))}
    </ul>
  )
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <ListOfUsers />
        </header>
      </div>
    </ApolloProvider>
  )
}

export default App
