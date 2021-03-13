import React, { useContext } from 'react';
import { PokemonsContext } from '../../contexts/PokemonsContext';

import './styles.scss';


function ShowStats() {
    const { poke } = useContext(PokemonsContext);
    return (
        <div className="container-show-stats">
            <section className="content-show-stats">
                <h3 className="content-name-pokemon">{poke?.data.name}</h3>
                <img src={poke?.data.sprites.front_default} alt={poke?.data.name}/>
                <div className="content-stats-info">
                    <p>ID <span>{poke?.data.id}</span></p>
                    <p>Tipo <span>{poke?.data.types.map(t => ( <span key={t.type.name}>{t.type.name}</span> ))}</span></p>
                    <p>Experiência base <span>{poke?.data.base_experience}</span></p>
                    <p>Peso <span>{poke?.data.weight}</span></p>

                    <h4>Habilidades</h4>
                    <ul className="content-abilities-list">
                        {poke?.data.abilities.map(ability => ( <li key={ability.ability.name}>{ability.ability.name}</li> ))}
                    </ul>
                </div>

            </section>
        </div>
    )
}

export default ShowStats;