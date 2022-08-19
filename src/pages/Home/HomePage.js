import React from 'react';

import '../Home/HomePage.css'

const Home = () => {

    
    return (
        
        <div className='w-full h-full'>
            <main className='flex flex-col justify-center items-center h-full'>
            <div className="pokeball mb-4">
            <div className="pokeball__button" />
          </div>

          <div className='flex flex-col'>
            <h1 className='font-bold text-2xl mb-2'>PokéDex</h1>
            <h2 className='text-lg mb-2'>Ei, começa a pesquisar os Pokémons por aqui:</h2>

            <div className='flex justify-evenly'>
                <a href='/generation/1'>
                    <button className='w-30 h-10 px-6 font-semibold rounded-md border-solid border-2 border-[#37474f] hover:bg-[#37474f] text-[#37474f] hover:text-white duration-200'>Geração</button>
                </a>
                <a href='/category/grass'>
                     <button className='w-30 h-10 px-6 font-semibold rounded-md border-solid border-2 border-[#37474f] hover:bg-[#37474f] text-[#37474f] hover:text-white duration-300'>Categoria</button>
                </a>
            </div>
           
          </div>
            </main>
        </div>
    )
}
export default Home;
