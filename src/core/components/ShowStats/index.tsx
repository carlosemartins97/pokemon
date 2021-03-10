import React from 'react';

import './styles.scss';

import pikachu from '../../assets/pikachu.png';

interface ShowStatsProps {
    pokemon?: {
        data: {
            id: number;
            name: string;
            base_experience: number;
            abilities: {
                ability: {
                    name: string;
                }
            }[];
            sprites: {
                front_default: string;
            }
            weight: number;
            types: {
                type: {
                    name: string;
                }
            }[]
        }
    }
}

function ShowStats(props: ShowStatsProps) {
    return (
        <div className="container-show-stats">
            <section className="content-show-stats">
                <h3 className="content-name-pokemon">{props.pokemon?.data.name}</h3>
                <img src={props.pokemon?.data.sprites.front_default} alt={props.pokemon?.data.name}/>
                <div className="content-stats-info">
                    <p>ID <span>{props.pokemon?.data.id}</span></p>
                    <p>Tipo <span>{props.pokemon?.data.types.map(t => ( <span key={t.type.name}>{t.type.name}</span> ))}</span></p>
                    <p>Experiência base <span>{props.pokemon?.data.base_experience}</span></p>
                    <p>Peso <span>{props.pokemon?.data.weight}</span></p>

                    <h4>Habilidades</h4>
                    <ul className="content-abilities-list">
                        {props.pokemon?.data.abilities.map(ability => ( <li key={ability.ability.name}>{ability.ability.name}</li> ))}
                    </ul>
                </div>

            </section>
        </div>
    )
}

export default ShowStats;