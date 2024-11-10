import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <nav>
        <ul className='flex gap-7 p-3'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/products'>Products</Link>
            </li>
            <li>
                <Link to='/reviews'>Reviews</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav