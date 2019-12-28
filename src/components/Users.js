import React from 'react'
import useResources from './useResources'

const Users = () => {
  const users = useResources('users')

  return(
    <>
      <h2>Users</h2>
      <ul>
        {users.map(user  => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </>
  )
}

export default Users