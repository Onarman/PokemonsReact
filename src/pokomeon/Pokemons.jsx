import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";


const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("")

  const inputRef = useRef(null)

  const getPokemons = async ()=>{
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
        const data = await response.json();
        setPokemons(data.results)
        // console.log(data);
    }catch(error){
        setError(error)
    }
}

useEffect(() => {
    getPokemons()
    inputRef.current.focus();
  }, []);
 

  const filteredPokemons = pokemons.filter((pokemon)=>{
    return pokemon.name.toLowerCase().includes(search.toLowerCase())
  })
  const handleSearchChange=(e)=>{
    setSearch(e.target.value)
  }
  return (
    <div className="container ">
      <h1>Pokemons</h1>
      <input type="text" placeholder="Enter a Pokemon name..."
      ref={inputRef}
      onChange={handleSearchChange}/>
      
      <div className="body">
      {filteredPokemons.map((pokemon) => (
        <Card 
        key={pokemon.name} 
        name={pokemon.name} 
        img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
        />
      ))}
      </div>
      
    </div>
  );
};

export default Pokemons;
