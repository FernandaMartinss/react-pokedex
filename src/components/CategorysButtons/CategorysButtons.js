import React from 'react'

import '../navBar/navBar.css'

import SvgGrass from '../../assets/grass.svg'
import SvgFire from '../../assets/fire.svg'
import SvgWater from '../../assets/water.svg'
import SvgLightning from '../../assets/electric.svg'

const CategorysButtons = () => {
  return (
    <div className='mt-6'>
      <div>
        <p className='text-gray-800 text-lg font-semibold'>Pesquisar por Categoria/Tipo</p>
      </div>
      <div className='flex justify-evenly flex-wrap sm:justify-center mt-4 md:space-x-8 px-2'>
        <a className='flex items-center bg-white font-bold text-sm hover:scale-105 text-green-500  py-1 px-2 md:text-lg md:px-4 border-2 border-green-500 rounded shadow duration-100' href='/category/grass'>
          <img className='mr-2' width={20} src={SvgGrass} />
          <span>Grass</span>
        </a>
        <a className='flex items-center bg-white font-bold text-sm  hover:scale-105  text-orange-500  py-1 px-2 md:text-lg md:px-4 border-2 border-orange-500 rounded shadow duration-100' href='/category/fire'>
        <img className='mr-2' width={20} src={SvgFire} />
          
          <span>Fire</span>
        </a>
        <a className='flex items-center bg-white font-bold text-sm hover:scale-105 text-blue-500 py-1 px-2 md:text-lg md:px-4 border-2 border-blue-500 rounded shadow duration-100' href='/category/water'>
        <img className='mr-2' width={20} src={SvgWater} />
          
          <span>Water</span>
          </a>
        <a className='flex items-center bg-white font-bold text-sm hover:scale-105 text-yellow-500 py-1 px-2 md:text-lg md:px-4 border-2 border-yellow-500 rounded shadow duration-100' href='/category/lightning'>
        <img className='mr-2' width={20} src={SvgLightning} />
         
          <span>Lightning</span>
          </a>
      </div>

    </div>
  )
}

export default CategorysButtons