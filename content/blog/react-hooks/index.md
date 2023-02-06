---
id: 62b87b5115e35cd77d0d0e1b
path: "/blog/react-hooks/"
date: "2022-07-01 10:00:00"
published: true
title: "React Hooks"
cover: "./agata-create-2122jrt79G8-unsplash.jpeg"
excerpt: "How I learned about hooks by upgrading this website"
coverCredits: Photo by <a href="https://unsplash.com/@agatacreate">Agata Create</a> on <a href="https://unsplash.com/@agatacreate">Unsplash</a>
keywords:
  - UI engineering
  - software engineering
---

I created this website a while ago.
Since then, I have missed a few major updates to [GatsbyJS](https://www.gatsbyjs.com/), a framework that powers my blog,
dozens of upgrades to plugins I have been using,
and large adoption of a brand-new approach in React (or should I say the whole UI/frontend?) world, [React hooks](https://reactjs.org/docs/hooks-intro.html).

So the time has come, and I have finally decided to upgrade the blog.
In the course of the upgrade, I have tried to figure out what this hype around React hooks is all about.

## Pre-Hooks Era

In the beginning, there were two types of components that React offered you to build your UI:

- Pure Function Components
- Class-based Components

Pure function components were great. They provided clean and boilerplate-free way of rendering some JSX templates:

```tsx
import * as React from "react"

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className="copyright">
        Roman Glushko © 1996 - {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
```

However, they were a bit limited.
Since functions are stateless, but a lot of UI elements are actually stateful, pure function components lacked a way to
implement some local state.

Another problem was that functional components were merely capable of just simple rendering of templates.
They were pretty stubborn in terms of letting you plug into the component lifecycle.
No ways to execute something when the component was about to unmount from the virtual DOM, for example.

On the other hand, there were class-based components.

Class-based components were capable of storing some local states and running different logic on different lifecycle events.
So they seemed like a way to go. However, class components were quite verbose. Just take a look at the following example:

```tsx
import React, { Component } from "react"

interface PokemonData {
  imageUrl: string
  type: string
  height: number
  weight: number
}

interface Props {
  name: string
}

interface State {
  name: string
  data?: PokemonData
}

export default class PokemonInfo extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    const { name } = props

    this.state = { name }
  }

  async fetchData(name: string): Promise<PokemonData> {
    // we need this logic in two lifecycle events: componentDidMount and componentDidUpdate
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then((res) => res.json())
      .then((pokeData) => {
        return {
          imageUrl: pokeData?.sprites?.front_default,
          type: pokeData?.types[0].type?.name,
          weight: pokeData?.weight,
          height: pokeData?.height,
        } as PokemonData
      })
  }

  async componentDidMount() {
    const { name } = this.state

    const pokemon: PokemonData = await this.fetchData(name)

    this.setState({
      data: pokemon,
    })
  }

  async componentDidUpdate(prevProps: Props) {
    // if name gets changed, refetch all pokemon data
    const { name } = this.state

    if (name !== prevProps.name) {
      const pokemon: PokemonData = await this.fetchData(name)

      this.setState({
        data: pokemon,
      })
    }
  }

  render() {
    const { name, data } = this.state

    if (!data) {
      return <div className={`pokemon-data loading`}>Loading..</div>
    }

    const { imageUrl, type, weight, height } = data

    return (
      <div className={`pokemon-data`}>
        <img src={imageUrl} alt={name} />
        <ul>
          <li>Type: {type}</li>
          <li>Weight: {weight}</li>
          <li>Height: {height}</li>
        </ul>
      </div>
    )
  }
}
```

`PokemonInfo` class is looong, but we have not coded anything sophisticated there.
Essentially, we have introduced a local state and fetched its value from some API.

This component also depends on the external `name` property, so we wanted to update the component output in case that value changes.
To achieve that, we needed to implement both `componentDidMount` and `componentDidUpdate`. In order not to duplicate logic (because those methods would be almost the same), we additionally created the `fetchData()` method.

Despite me using TypeScript here, it took us quite a bit of space and chars to code that piece.
Class-based components were not as concise as we would like them to be.

## Invention of Hooks

So we came up with two-component types. Both have approximately opposite pros and cons.
I wish we could combine the best of each world, right?

This is exactly what the React team did with Hooks.

Roughly, hooks allow pure JS functions to have a state and side effects.

`video: title: "Pure Functions have state in React": https://media.giphy.com/media/rN2EZm3CSXHY1QoGrq/giphy.mp4`

Yeah, you got me. State and side effects in pure functions.
This may sound like the worst nightmare for some functional programmers, but it turned out to play very well in the UI world.

Let's see how hooks will transform the code below:

```tsx
import React, { useEffect, useState } from "react"

interface PokemonData {
  imageUrl: string
  type: string
  height: number
  weight: number
}

interface Props {
  name: string
}

const fetchPokemonData = (name: string): Promise<PokemonData> => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then((res) => res.json())
    .then((pokeData) => {
      return {
        imageUrl: pokeData?.sprites?.front_default,
        type: pokeData?.types[0].type?.name,
        weight: pokeData?.weight,
        height: pokeData?.height,
      } as PokemonData
    })
}

export const PokemonInfo = (props: Props) => {
  // state initialization
  const [name, _] = useState<string>(props.name)
  const [data, setPokemonData] = useState<undefined | PokemonData>(undefined)

  useEffect(() => {
    // a place for all function's side effects like external requests, websocket inits, timer setup, etc

    const fetchPokemon = async (name: string) => {
      setPokemonData(await fetchPokemonData(name))
    }

    fetchPokemon(name)
  }, [name])

  // template rendering as simple as it has been in the pure function components before

  if (!data) {
    return <div className={`pokemon-data loading`}>Loading..</div>
  }

  const { imageUrl, type, weight, height } = data

  return (
    <div className={`pokemon-data`}>
      <img src={imageUrl} alt={name} />
      <ul>
        <li>Type: {type}</li>
        <li>Weight: {weight}</li>
        <li>Height: {height}</li>
      </ul>
    </div>
  )
}
```

What has changed?

With hooks, our refactored the `PokemonInfo` component consists of three parts now:

- state setup
- side effect setup
- template rendering

You will see that a lot of hook-powered components look more-less the same way.

The state looks like a local variable and only the `useState()` function
makes it "persisted" magically across function's reruns/rerenders.

The lifecycle methods that spread effects across multiple functions
have been squeezed into one effect function that may have dependencies on a state.

Finally, the rendering part remains as simple and clear as it had been in the pure function components before.

Overall these changes have made the `PokemonInfo` component cleaner and its structure is now more predictable and standard.
That's a great sign that our component and [its intent](/blog/communicate-through-code/) are going to be well understood by other engineers.

## Declarative vs Imperative

It's not a coincidence I paid your attention to the new `PokemonInfo` structure.
If you compare it to the previous one, you may find out that it became more declarative.
Previously, it was us who was deliberately changing the internal state, invoking it in the right lifecycle event.
Essentially, we were telling React how to do things for us.

Hooks have shifted that paradigm to a more declarative one.
They allow us to tell React what we want to get and let it figure out the rest.

This is a great property as it enables compilers to have more control over rerendering optimizations for us and instead of us.

## Conclusions

For me, this short story is a good example
that we need to be always contentious about what kind of problem we want to solve and
never be frightening of breaking some existing rules or best practices.
Chances are they were not designed to be applied in your context anyway.

And that is how revolutions happen.

## References

- [[ReactJs] Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [[ReactJs] Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)
