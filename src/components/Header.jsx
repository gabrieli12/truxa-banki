import React from 'react'
import Nav from './nav'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <header className='flex w-full justify-between items-center p-4 px-40 relative z-10 text-white'>
        <div className='flex justify-center items-center gap-10'>
            <h1 className='text-3xl font-sans'>MyBank</h1>
            <Nav />
        </div>
        <button>
            <Link to='/login'>Join Our Bank</Link>
        </button>
    </header>
  )
}

export default Header