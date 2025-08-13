import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function NavItem({ to = '/', label }) {
  return (
    <li>
      <NavLink to={to}>{label}</NavLink>
    </li>
  )
}

export default NavItem
