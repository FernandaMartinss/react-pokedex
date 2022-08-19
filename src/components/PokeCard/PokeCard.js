import React, { useEffect, useState } from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
// import PersonIcon from '@mui/icons-material/Person';

import api from '../../api/api.js'

import '../PokeCard/PokeCard.css'


const SimpleDialog = (props) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>

    </Dialog>
  );
}

const PokeCard = ({key, name}) => {

  const [open, setOpen] = useState(false);
  const [pokemon, setPokemon] = useState({});
  
  const upperCaseFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    // setSelectedValue(value);
  };


  useEffect(() => {
    const loadDetail = async () => {
      const result = await api.getPokemonDetail(name)

      // console.log(result)

      setPokemon({
        id: result[0].item.id,
        name: upperCaseFirstLetter(result[0].item.name),
        image: result[0].item.sprites.other['official-artwork'].front_default,
        types: result[0].item.types,

      }, [])
      // console.log(result[0].item)
  
    }
    loadDetail()
  }, [])
    // console.log(name)
  return (
    <div>
 <div onClick={handleClickOpen} className='flex flex-col bg-white w-60 justify-center items-center shadow-md p-8 mb-8 rounded-lg cursor-pointer hover:scale-110 duration-100'>
      <img className='h-40' src={pokemon.image} />

      <><b>#{pokemon.id}</b> <span className='text-lg'>{pokemon.name}</span></>
     
    </div>

    </div>
   
   
  )
}

export default PokeCard