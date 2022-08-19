import React from 'react'

import '../navBar/navBar.css'

const NavBar = () => {
  return (
    <nav className='bg-white flex h-16 justify-center items-center shadow-md py-10 px-40'>
        
      <a className='flex items-center' href='/'>
      <div className="poke mr-2">
            <div className="poke__button" />
          </div>
       
<p className='text-xl font-bold cursor-pointer'>PokéDex</p>
      </a>


    </nav>
  )
}

export default NavBar