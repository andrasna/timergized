import React from 'react'
import {
  useQuery,
  gql,
} from '@apollo/client'

const getUsers = gql`
  {
    users {
      _id
      name
      email
    }
  }
`

export default function ListUsers() {
  const {data} = useQuery(getUsers)

  if (!data) return null 

  return(
    <ul>
      {data.users.map((user, i) => (
        <List key={i}>{user.name} {user.email}</List>
      ))}
    </ul>
  )
}