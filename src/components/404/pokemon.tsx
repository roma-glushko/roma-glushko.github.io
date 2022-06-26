import React, { useEffect, useState } from "react"

import "./pokemon.css"

interface Stat {
  name: Stats
  value: number
}

interface Ability {
  name: string
  hidden: boolean
  description: string
}

interface PokemonData {
  name: string
  base_exp: number
  imageUrl: string
  types: string[]
  height: number
  weight: number
  stats: Stat[]
  abilities: Ability[]
}

interface Props {
  children: JSX.Element
}

export const randomPokemonID = (): number => {
  const minID: number = 1
  const maxID: number = 600

  return Math.floor(Math.random() * (maxID - minID + 1) + minID)
}

const noDash = (value: string): string => {
  return value.replace("-", " ")
}

async function fetchJson<T>(url: string): Promise<T> {
  return fetch(url).then((res) => res.json())
}

const fetchAbilities = async (
  rawAbilities: RawAbility[]
): Promise<Ability[]> => {
  return Promise.all(
    rawAbilities.map(async (rawAbility: RawAbility) => {
      const ability = await fetchJson<PokemonAbilityOut>(rawAbility.ability.url)
      const effectInEng: EffectEntry | undefined = ability.effect_entries.find(
        (entry: EffectEntry) => entry.language.name == "en"
      )

      return {
        name: rawAbility.ability.name,
        hidden: rawAbility.is_hidden,
        description: effectInEng?.short_effect,
      } as Ability
    })
  )
}

const fetchPokemon = async (ID: number): Promise<PokemonData> => {
  return fetchJson<PokemonDataOut>(
    `https://pokeapi.co/api/v2/pokemon/${ID}`
  ).then(async (pokeData) => {
    return {
      name: pokeData.name,
      imageUrl: pokeData?.sprites?.other?.dream_world?.front_default,
      types: pokeData?.types.map((type: RawTypeItem) => type.type?.name),
      weight: pokeData?.weight,
      height: pokeData?.height,
      stats: pokeData?.stats.map((statItem: RawStatItem) => ({
        name: statItem.stat.name,
        value: statItem.base_stat,
      })),
      base_exp: pokeData.base_experience,
      abilities: await fetchAbilities(pokeData.abilities),
    } as PokemonData
  })
}

const Pokemon = ({ children }: Props): JSX.Element => {
  const [pokemonID, _] = useState(randomPokemonID())
  const [pokemonData, setPokemonData] = useState<PokemonData | undefined>(
    undefined
  )

  useEffect(() => {
    const fetchRandomPokemon = async (pokemonID: number) => {
      const pokemonData: PokemonData = await fetchPokemon(pokemonID)
      setPokemonData(pokemonData)
    }

    fetchRandomPokemon(pokemonID)
  }, [pokemonID, setPokemonData])

  if (!pokemonData) {
    return <div className={`pokemon loading`}>Looking for pokemons..</div>
  }

  const { name, imageUrl, types, weight, height, stats, abilities, base_exp } =
    pokemonData

  return (
    <div className={`pokemon`}>
      <div className={`pokeball`}>
        <img src={imageUrl} alt={name} title={name} />
      </div>
      {children}
      <h2 className={`name`}>{name}</h2>
      <div className="pokeinfo">
        <div className={`stats`}>
          <h3>Stats</h3>
          <ul>
            <li key={`type`}>
              <span className={`key name`}>Type:</span>
              <span className={`value type`}>{types.join(" + ")}</span>
            </li>
            <li key={`weight`}>
              <span className={`key name`}>Weight:</span>
              <span className={`value`}>{weight}</span>
            </li>
            <li key={`height`}>
              <span className={`key name`}>Height:</span>
              <span className={`value`}>{height}</span>
            </li>
            <li key={`base_exp`}>
              <span className={`key name`}>Base EXP:</span>
              <span className={`value`}>{base_exp}</span>
            </li>
            {stats.map((stat: Stat) => (
              <li key={stat.name}>
                <span className={`key name ${stat.name.toLowerCase()}`}>
                  {noDash(stat.name.replace("special", "sp."))}:
                </span>
                <span className={`value`}>{stat.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={`abilities`}>
          <h3>Abilities</h3>
          <ul>
            {abilities.map((ability: Ability) => (
              <li key={ability.name}>
                <span className={`name`}>{noDash(ability.name)}</span>
                <span role={`img`} title={ability.description}>
                  ❓
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pokemon
