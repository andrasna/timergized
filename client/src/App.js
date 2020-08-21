import React from 'react'
import WrapperOuter from './components/WrapperOuter.js'
import WrapperInner from './components/WrapperInner.js'
import './css/index.css'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <WrapperOuter>
        <WrapperInner>
          <h1>Hello...</h1>
        </WrapperInner>
      </WrapperOuter>
    </ApolloProvider>
  )
}

export default App
