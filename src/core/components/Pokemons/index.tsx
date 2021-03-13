import React, { useContext } from 'react';

import { PokemonsContext } from '../../contexts/PokemonsContext';

import './styles.scss';

function Pokemons(){

    const { fewPokes, handlePokemonClick } = useContext(PokemonsContext);



    return (
        <div className="container-pokemons">
            <h2>Pokemons</h2>

            <ul className="content-pokemons">
                {fewPokes?.data.pokemon.map(item => {
                    return (
                        <li key={item.pokemon.name}
                            onClick={() => handlePokemonClick(`${item.pokemon.name}`)}
                        >{item.pokemon.name}</li>
                    )
                })}

            </ul>
        </div>
    )
}

export default Pokemons;