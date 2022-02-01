import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/login" activeStyle={
            {
              fontWeight:'bold',
              color: 'red'
            }
          }>Login</NavLink>
        </li>
        <li>
          <NavLink exact to="/" activeStyle={
            {
              fontWeight:'bold',
              color: 'red'
            }
          }>Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/profile" activeStyle={
            {
              fontWeight:'bold',
              color: 'red'
            }
          }>Profile</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
