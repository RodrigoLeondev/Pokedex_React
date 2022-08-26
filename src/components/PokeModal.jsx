import { useEffect, useState } from "react"

export default function PokeModal(props) { //recibimos la url
  const [ pokemon, setPokemon ] = useState({}) 

  useEffect(() => {
    fetch(props.url) // la función regresa una promesa, cuando secumple...
    .then(response => response.json()) // pasa el contenido a un formato json y regresa otra promesa, cuando se cumple
    .then(json => setPokemon(json)) // regresa el objeto ya formado
  }, [props.url]) // ->todos los estados que usemos en use effect, debe ser un array de dependencia, si no se declara y cambia la url, no se hace la función

  return(
    <section className="pokemodal" onClick={props.toClose}>
      <main onClick={(event) => event.stopPropagation()}> 
        <img src={pokemon?.sprites?.front_default}alt="" // ? cuando ingresamo el objeto y es indefinido, con ? regresa null, puede sustituir el && &&
        />  
        <h2>
        {pokemon.name} 
          <span>{pokemon.id}</span>
        </h2>
          <h3>
            {/* {pokemon.types?.reduce((acc, type) => (acc += type?.type?.name), '')} */}
            {pokemon?.types?.map(type => type?.type?.name)?.join(', ')}    
          </h3> 
          <h3>{pokemon?.height} Pokeunidades</h3>
          <h3>{pokemon?.weight} Pokekilos</h3>
      </main>
    </section>
  )
}