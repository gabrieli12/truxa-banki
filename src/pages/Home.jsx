import React from 'react'

import bankBg from '../assets/images/bankBgImg.avif'

function Home() {
  return (
    <section className='h-screen flex justify-center items-center '>
      <img className='w-full h-full object-cover absolute top-0 z-0 brightness-75 ' src={bankBg} alt="" />
      <section className='text-white -mt-40'>
          <p className='text-5xl relative font-bold '>Welcome Our Bank</p>
      </section>
    </section>
  )
}

export default Home