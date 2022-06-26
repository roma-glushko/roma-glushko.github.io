import React, {useEffect, useState} from "react"

import "./pokemon.css"

interface PokemonData {
  name: string
  imageUrl: string
  type: string
  height: number
  weight: number
}

interface Props {
  children: JSX.Element
}

export const randomPokemonID = (): number => {
  const minID: number = 1
  const maxID: number = 500

  return Math.floor(Math.random() * (maxID - minID + 1) + minID)
}

const fetchPokemon = async (ID: number): Promise<PokemonData> => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`)
    .then((res) => res.json())
    .then((pokeData) => {
      console.dir(pokeData)
      return {
        name: pokeData.name,
        imageUrl: pokeData?.sprites?.other?.dream_world?.front_default,
        type: pokeData?.types[0].type?.name,
        weight: pokeData?.weight,
        height: pokeData?.height,
      } as PokemonData
    })
}

const Pokemon = ({children}: Props): JSX.Element => {
  const [pokemonData, setPokemonData] = useState<PokemonData | undefined>(undefined)

  useEffect(() => {
    const pokemonID: number = randomPokemonID()

    const fetchRandomPokemon = async () => {
      const pokemonData: PokemonData = await fetchPokemon(pokemonID)
      setPokemonData(pokemonData)
    }

    fetchRandomPokemon()
  }, [setPokemonData])

  if (!pokemonData) {
    return <div className={`pokemon loading`}>Looking for pokemons..</div>
  }

  const { name, imageUrl, type, weight, height } = pokemonData

  return (
    <div className={`pokemon`}>
      <div className={`pokeball`}>
        <img src={imageUrl} alt={name} />
      </div>
      {children}
      <h2 className={`name`}>{ name }</h2>
      <ul className={`properties`}>
        <li>Type: {type}</li>
        <li>Weight: {weight}</li>
        <li>Height: {height}</li>
      </ul>
    </div>
  )
}

export default Pokemon
