import { NavLink } from 'react-router-dom'
// Create a navbar for our application

function Navbar () {
  return (
    <ul className='nav nav-tabs mb-5'>
      <li className='nav-item'>
        <NavLink
          to='/'
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          aria-current='page'
        >
          Home
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink
          to='add'
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          New Product
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink
          to='settings'
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          Settings
        </NavLink>
      </li>
    </ul>
  )
}

export default Navbar
