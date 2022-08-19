import React from 'react'

import '../navBar/navBar.css'

const GenerationButtons = () => {
  return (
    <div className='mt-6'>
      <div>
        <p className='text-gray-800 text-lg font-semibold'>Pesquisar por Geração</p>
      </div>
      <div className='flex justify-evenly flex-wrap sm:justify-center mt-4 md:space-x-8 px-2'>
      <a className='bg-white text-sm hover:bg-gray-100 py-1 px-2 md:text-lg md:px-4 border border-gray-400 rounded shadow' href='/generation/1'><span>Geração 1</span></a>
      <a className='bg-white text-sm hover:bg-gray-100 py-1 px-2 md:text-lg md:px-4 border border-gray-400 rounded shadow' href='/generation/2'><span>Geração 2</span></a>
      <a className='bg-white text-sm hover:bg-gray-100 py-1 px-2 md:text-lg md:px-4 border border-gray-400 rounded shadow' href='/generation/3'><span>Geração 3</span></a>
      <a className='bg-white text-sm hover:bg-gray-100 py-1 px-2 md:text-lg md:px-4 border border-gray-400 rounded shadow' href='/generation/4'><span>Geração 4</span></a>
      </div>
     
    </div>
  )
}

export default GenerationButtons