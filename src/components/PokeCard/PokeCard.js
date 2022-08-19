import React, { useEffect, useState } from 'react'
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
// import PersonIcon from '@mui/icons-material/Person';

import api from '../../api/api.js'

import '../PokeCard/PokeCard.css'


const PokeCard = ({ key, name }) => {

  const [pokemon, setPokemon] = useState({});

  const upperCaseFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {

    const loadDetail = async () => {
      const result = await api.getPokemonDetail(name)

      setPokemon({
        id: result[0].item.id,
        name: upperCaseFirstLetter(result[0].item.name),
        image: result[0].item.sprites.other['official-artwork'].front_default,
        types: result[0].item.types.map((pokemonType) => ({
          name: pokemonType.type.name,
        })),
        hp: result[0].item.stats[0].base_stat,
        attack: result[0].item.stats[1].base_stat,
        defense: result[0].item.stats[2].base_stat,
        speed: result[0].item.stats[5].base_stat,
        weight: `${result[0].item.weight / 10} kg`,
        height: `${result[0].item.height / 10} m`,

      }, [])

    }
    loadDetail()
  }, [])
  return (
    <div>
      <div onClick={handleClickOpen} className='flex flex-col bg-white w-60 justify-center items-center shadow-md p-8 mb-8 rounded-lg cursor-pointer hover:scale-110 duration-100'>
        <img className='h-40' src={pokemon.image} />

        <><b>#{pokemon.id}</b> <span className='text-lg'>{pokemon.name}</span></>

      </div>

      <Dialog maxWidth='false' onClose={handleClose} open={open}>
        {/* <DialogTitle> */}

        {/* </DialogTitle> */}
        <div className='flex flex-col items-center sm:flex-row p-8 md:p-4'>
          <img className='w-40 h-40' src={pokemon.image} />
          <div>
            <span className='flex text-2xl font-bold mb-4 md:m-4'> <p className='text-gray-500 mr-2'>#{pokemon.id} </p> {pokemon.name} </span>

            <div className='flex flex-wrap justify-center mb-4'>

              <div className='flex flex-col w-24 mb-2 justify-center items-center ml-2'>
                <p className='font-bold'>Vida:</p>
                <span>{pokemon.hp}</span>
              </div>

              <div className='none md:flex'>
                <Divider orientation="vertical" flexItem />
              </div>

              <div className='flex flex-col w-24 mb-2 justify-center items-center ml-2'>
                <p className='font-bold'>Ataque:</p>
                <span>{pokemon.attack}</span>
              </div>

              <div className='none md:flex'>
                <Divider orientation="vertical" flexItem />
              </div>

              <div className='flex flex-col w-24 justify-center items-center ml-2'>
                <p className='font-bold'>Defesa:</p>
                <span>{pokemon.defense}</span>
              </div>

              <div className='none md:flex'>
                <Divider orientation="vertical" flexItem />
              </div>

              <div className='flex flex-col w-24 justify-center items-center ml-2'>
                <p className='font-bold'>Velocidade:</p>
                <span>{pokemon.speed}</span>
              </div>

            </div>

            <Divider orientation="horizontal" flexItem />

            <div className='flex flex-wrap justify-center mt-4 mb-4'>

              <div className='flex flex-col w-24 justify-center items-center ml-2'>
                <p className='font-bold'>Peso:</p>
                <span>{pokemon.weight}</span>
              </div>

              <div className='none md:flex'>
                <Divider orientation="vertical" flexItem />
              </div>


              <div className='flex flex-col w-24 justify-center items-center ml-2'>
                <p className='font-bold'>Altura:</p>
                <span>{pokemon.height}</span>
              </div>

            </div>

            <Divider orientation="horizontal" variant="middle" flexItem />


            <div className='mt-4'>
              {pokemon.types && (
                <div className='flex flex-col items-center mr-2'>
                  <p className='font-bold'>Tipos:</p>
                  {pokemon.types.map(pokemonType => (
                    <span className='font-md text-gray-500'>{upperCaseFirstLetter(pokemonType.name)}</span>

                  ))}

                  {/* <p>{pokemon.types.join('-')}</p> */}
                </div>
              )}
            </div>
          </div>

        </div>



      </Dialog>

    </div>


  )
}

export default PokeCard