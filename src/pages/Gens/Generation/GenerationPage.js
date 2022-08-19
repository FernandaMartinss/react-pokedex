import React, { useEffect, useState, useCallback } from 'react';

import NavBar from '../../../components/navBar/navBar';

import GenerationButtons from '../../../components/GenerationsButtons/GenerationButtons.js'


import api from '../../../api/api.js'
import PokeCard from '../../../components/PokeCard/PokeCard';

const Generation = () => {

  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);


  useEffect(() => {
    const loadGens = async () => {
    const list = await api.getPokemonByGeneration()

    const pokemons = list

    setPokemons(pokemons)
    setFilteredPokemons(pokemons[0].items)

  }
    loadGens()
  }, [])

    return (
      
        <div className='w-full h-full'>
        <NavBar />
            <main className='flex flex-col w-full h-full'>


            <GenerationButtons />

            <h1 className='text-3xl font-semibold mt-8'>Geração 1</h1>

              
              <div className='flex flex-wrap mt-6 w-full justify-evenly sm:px-20 lg:px-40 '>
                  {filteredPokemons?.map((item, key) => ( 
                     <PokeCard key={key} name={item.name} /> 
                  )) }
              </div>
            </main>
        </div>
    )
}
export default Generation;
