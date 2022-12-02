import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserLogged = () => {

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <article className='logged-conatiner'>
        <i className="fa-solid fa-user-check"></i>
        <h2>User Logged</h2>
        <button className='logged__btn' onClick={logout}>logged</button>
    </article>
  )
}

export default UserLogged