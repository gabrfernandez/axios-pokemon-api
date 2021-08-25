import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Pokemons (){
    const [pokemon, setPokemon]= useState([]);

    // useEffect (()=>{
    //     fetch('https://pokeapi.co/api/v2/pokemon/')
    //     .then(response=>response.json())
    //     .then(response=>setPokemon(response.results))

    // }, [pokemon.onClick]);
    function clickHandler(){
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then(response=>setPokemon(response.data.results))

    };

    return (
        <div>
            <h1>Pokemon</h1>
            <button onClick={clickHandler}>See Pokemon</button>
            {pokemon.map((poke , i)=>{
                return (
                    <div key={i}>
                        <h3>{poke.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Pokemons;