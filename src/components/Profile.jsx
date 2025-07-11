import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <h1>Not Logged in</h1>
  return (
    <div>Profile: {user}</div>
  )
}

export default Profile