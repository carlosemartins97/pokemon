import axios from 'axios';
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ItemCarouselContext } from './ItemCarouselContext';

interface PokemonsContextData {
    fewPokes?: {
        data: {
            pokemon: {
                pokemon: {
                    name: string;
                }
            }[]
        }
    };
    handlePokemonClick: (name: string) => void;
    poke?: Pokemon;
}

interface PokemonsProviderProps {
    children: ReactNode;
}

interface Pokemon {
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


export const PokemonsContext = createContext({} as PokemonsContextData);

function PokemonsProvider({children}: PokemonsProviderProps){
    const [poke, setPoke] = useState<Pokemon>();
    
    const { fewPokes } = useContext(ItemCarouselContext);

    function handlePokemonClick(name: string){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(data => {
                setPoke(data);
            })
    }

    return (
        <PokemonsContext.Provider value={{
            fewPokes,
            handlePokemonClick,
            poke,

            }}>

            {children}
        </PokemonsContext.Provider>
    )
}

export default PokemonsProvider;