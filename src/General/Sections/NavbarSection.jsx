import React from 'react'
import { Link } from 'react-router-dom'

const NavbarSection = () => {
  return (
    <div className='container flex flex-row justify-between items-center mx-auto'>
      <div>Barberbro</div>
      <div>
        <ul className='flex flex-row gap-2'>
          <Link to="/login">Login</Link>
        </ul>
      </div>
    </div>
  )
}

export default NavbarSection