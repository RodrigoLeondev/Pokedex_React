import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import PokeModal from "./components/PokeModal";

// const pokemons = [
//   {
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_rbHmikkCW2GKukw19QE6v19shwq0k9hIJjD5w90EhvITQxqPXG_9Us0kx3-mJz8L6rg&usqp=CAU",
//     name: "charizard"
//   }
// ]

function App() {

  const [ pokemons, setPokemons ] = useState([]);
  const [ pokemonSelected, setPokemonSelected ] = useState('')

  useEffect( () => {
    const pokemons = 
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then((response) => response.json())
      .then(response => {setPokemons(response.results)
      })

  }, [])

  const updateSelectedPokemon = (url) => { //Le pasamos la url, pasamos la url al estado
    setPokemonSelected(url)
    console.log('url', url)
  }

  // Falsy- valor que represente nada '', null, undefined, false, NaN, 0
  // Cuando pokemon selected es un trudy, renderizo el pokemodal 
  // AND 
  // true && true = true
  // false & true = false
  // true && false = false
  // False && false = false

  return (
    <>
  
    { pokemonSelected && <PokeModal url={pokemonSelected} toClose={() => setPokemonSelected('')}/>}  
    
    <header className="header-logo">
      <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_rbHmikkCW2GKukw19QE6v19shwq0k9hIJjD5w90EhvITQxqPXG_9Us0kx3-mJz8L6rg&usqp=CAU" 
      alt="Pokemon-logo" />
    </header>
    <main className="pokemon-list">
      { pokemons
          .map(pokemon => {
            return <PokemonCard 
            key={pokemon.url} 
            name={pokemon.name} 
            url={pokemon.url}  //key es un id unico
            onClick={() => updateSelectedPokemon(pokemon.url)} // se manda a llamar la función  pasando al on click un callback
            />
          })}
    </main>
    </>
  );
}

export default App;
