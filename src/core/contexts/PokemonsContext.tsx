import React, { createContext, ReactNode, useContext } from 'react';
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
}

interface PokemonsProviderProps {
    children: ReactNode;
}


export const PokemonsContext = createContext({} as PokemonsContextData);

function PokemonsProvider({children}: PokemonsProviderProps){
    
    const { fewPokes } = useContext(ItemCarouselContext);

    return (
        <PokemonsContext.Provider value={{
            fewPokes,

            }}>

            {children}
        </PokemonsContext.Provider>
    )
}

export default PokemonsProvider;