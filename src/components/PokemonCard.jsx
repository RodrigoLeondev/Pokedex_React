import { useEffect, useState } from "react"

export default function PokemonCard (props) {
    //const [ pokemon, setPokemon ] = useState({sprites: {front_default: ''}}) // Se hace que el cuando termin de montar el primer componente, lea el segundo
    //Aqui se hace otro fetch para traer imágenes, haciendo que la card sea responsable de el fetch
    
    const [ pokemon, setPokemon ] = useState({})

    useEffect(() => {
        fetch(props.url)
            .then(response => response.json())
            .then(json => setPokemon(json))
    }, [props.url])


    return (
        <article className="pokemon-card" onClick={props.onClick}>
        <header>
          <img 
          // ? marca null y no indefinido de js     
          src={pokemon?.sprites?.front_default}
          alt="pokemon image" />
          <footer>
            <p>{props.name}</p>
          </footer>
        </header>
      </article>
    )
}