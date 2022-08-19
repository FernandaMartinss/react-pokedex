// import axios from 'axios'


const API_BASE_URL = 'https://pokeapi.co/api/v2'

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE_URL}${endpoint}`)
  const json = await req.json()

  return json
}

export default {

  getPokemonList: async () => {
    return [
      {
        items: await (await basicFetch(`/pokemon?limit=9`))
      },
    ]
  },

  getPokemonByGeneration: async () => {
    return [
      {
        items: await (await basicFetch(`/generation/${1}?limits=9`)).pokemon_species,
        id: '1',
        title: 'Geração 1'
      },
      {
        items: await (await basicFetch(`/generation/${2}?limits=9`)).pokemon_species,
        id: '2',
        title: 'Geração 2'
      },
      {
        items: await (await basicFetch(`/generation/${3}?limits=9`)).pokemon_species,
        id: '3',
        title: 'Geração 3'
      },
      {
        items: await (await basicFetch(`/generation/${4}?limits=9`)).pokemon_species,
        id: '4',
        title: 'Geração 4'
      },
    ]
  },

  getPokemonByTypes: async () => {
    return [
      {
        items: await (await basicFetch(`/type/grass`)).pokemon,
        slug: 'grass',
        title: 'Grass'
      },
      {
        items: await (await basicFetch(`/type/fire`)).pokemon,
        slug: 'fire',
        title: 'Fire'
      },
      {
        items: await (await basicFetch(`/type/water`)).pokemon,
        slug: 'water',
        title: 'Water'
      },
      {
        items: await (await basicFetch(`/type/electric`)).pokemon,
        slug: 'lightning',
        title: 'Lightning'
      },
    ]
  },

  getPokemonDetail: async (name) => {
    return [
      {
        item: await (await basicFetch(`/pokemon/${name}`))
      },
    ]
  },


  // getPokemonByCategory: async () => {
  //     return [
  //         {
  //             title: 'Geração 1',
  //             slug: 'generation-1',
  //             items: await (await axios.get('https://pokeapi.co/api/v2/generation/1'))
  //         },
  //         {
  //             title: 'Geração 2',
  //             slug: 'generation-2',
  //             items: await (await axios.get('https://pokeapi.co/api/v2/generation/2'))
  //         },
  //         {
  //             title: 'Geração 3',
  //             slug: 'generation-3',

  //             items: await (await axios.get('https://pokeapi.co/api/v2/generation/3'))
  //         },
  //         {
  //             title: 'Geração 4',
  //             slug: 'generation-4',
  //             items: await (await axios.get('https://pokeapi.co/api/v2/generation/4'))
  //         },
  //     ]
  // }
}

// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://pokeapi.co/api/v2',
// });

// export default api;