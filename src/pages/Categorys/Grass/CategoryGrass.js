import React, { useEffect, useState, useCallback } from 'react';

import NavBar from '../../../components/navBar/navBar';


import api from '../../../api/api.js'
import PokeCard from '../../../components/PokeCard/PokeCard';
import CategorysButtons from '../../../components/CategorysButtons/CategorysButtons';

const CategoryGrass = () => {

  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const loadGens = async () => {
    const list = await api.getPokemonByTypes()

    const pokemons = list

    console.log(pokemons)

    setPokemons(pokemons)
    setFilteredPokemons(pokemons[0].items)

  }
    loadGens()
  }, [])

    return (
      
        <div className='w-full h-full'>
        <NavBar />
            <main className='flex flex-col w-full h-full'>


            <CategorysButtons />

            <h1 className='text-3xl mt-8 text-green-500 font-bold'>Grass</h1>

              
              <div className='flex flex-wrap mt-6 w-full justify-evenly sm:px-20 lg:px-40 '>
                  {filteredPokemons?.map((item, key) => ( 
                     <PokeCard key={key} name={item.pokemon.name} /> 
                  )) }
              </div>
            </main>
        </div>
    )
}
export default CategoryGrass;
