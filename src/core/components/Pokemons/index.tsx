import React, { useContext } from 'react';
import { ItemCarouselContext } from '../../contexts/ItemCarouselContext';

import './styles.scss';

function Pokemons(){

    const { fewPokes } = useContext(ItemCarouselContext);


    return (
        <div className="container-pokemons">
            <h2>Pokemons</h2>

            <ul className="content-pokemons">
                {fewPokes?.data.pokemon.map(item => {
                    return (
                        <li key={item.pokemon.name}>{item.pokemon.name}</li>
                    )
                })}

            </ul>
        </div>
    )
}

export default Pokemons;