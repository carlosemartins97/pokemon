import React, { createContext, ReactNode, useContext } from 'react';

interface PokemonsContextData {

}

interface PokemonsProviderProps {
    children: ReactNode;
}

export const PokemonsContext = createContext({} as PokemonsContextData);

function PokemonsProvider({children}: PokemonsProviderProps){
    return (
        <PokemonsContext.Provider value={{}}>
            {children}
        </PokemonsContext.Provider>
    )
}