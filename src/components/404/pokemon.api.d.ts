interface RawTypeItem {
  type: {
    name: string
    url: string
  }
}

interface RawStatItem {
  base_stat: number
  stat: {
    name: string
  }
}

interface RawAbility {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
}

interface PokemonDataOut {
  name: string
  base_experience: number
  weight: number
  height: number
  types: RawTypeItem[]
  stats: RawStatItem[]
  abilities: RawAbility[]
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
}

interface EffectEntry {
  effect: string
  short_effect: string
  language: {
    name: string
  }
}

interface PokemonAbilityOut {
  effect_entries: EffectEntry[]
}

type Stats =
  | "hp"
  | "attack"
  | "speed"
  | "defence"
  | "special-attack"
  | "special-defence"
