import React from 'react';
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
  const { loading, error, data } = useQuery(getUsers)

  // if (loading) return <p>Loading</p>;
  // if (error) return <p>ERROR</p>;
  // if (!data) return <p>Not found</p>;
  if (!data) return null 

  const users = []

  for (let user of data.users) {
    users.push(<li key={user._id}>{ `Username ${user.name}, Email: ${user.email}` }</li>)
  }

  return <ul>{ users }</ul>
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
