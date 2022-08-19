import React, { useEffect, useState, useCallback } from 'react';


import NavBar from '../../../components/navBar/navBar';

import api from '../../../api/api.js'
import PokeCard from '../../../components/PokeCard/PokeCard';
import GenerationButtons from '../../../components/GenerationsButtons/GenerationButtons';

const GenerationII = () => {

  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    const loadGens = async () => {
    const list = await api.getPokemonByGeneration()

    const pokemons = list

    console.log(list)
    setPokemons(pokemons)

    setFilteredPokemons(pokemons[3].items)

  }
    loadGens(1)
  }, [])

  useEffect(() => {
    console.log(filteredPokemons)
  }, [filteredPokemons])
  
    
    return (
      
        <div className='w-full h-full'>
        <NavBar />
            <main className='flex flex-col w-full h-full'>

     
            <GenerationButtons />

            <h1 className='text-3xl font-semibold mt-8'>Geração 4</h1>
             
              
              <div className='flex flex-wrap mt-8 w-full justify-evenly sm:px-20 lg:px-40 '>
                  {filteredPokemons?.map((item, key) => ( 
                     <PokeCard key={key} name={item.name} /> 
                  )) }
              </div>
            </main>
        </div>
    )
}
export default GenerationII;
