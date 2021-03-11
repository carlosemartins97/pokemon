import React, {createContext, ReactNode, useEffect, useState} from 'react';
import axios from 'axios';

interface ItemCarouselContextData {
    pokeType?: Type;
    handleTypeClick: () => void;
    fewPokes?: FewPokes; 
}

interface ItemCarouselProviderProps {
    children: ReactNode;
}

interface Type {
    data: {
        results: {
            name: string;
        }[]
    }
}

interface FewPokes {
    data: {
        pokemon: {
            pokemon: {
                name: string;
            }[]
        }[]
    }
}


export const ItemCarouselContext = createContext({} as ItemCarouselContextData);

function ItemCarouselProvider({children}: ItemCarouselProviderProps){
    const [pokeType, setPokeType] = useState<Type>();
    const [fewPokes, setFewPokes] = useState<FewPokes>();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type')
            .then(data => {
                setPokeType(data);
            })
    },[])

    function handleTypeClick(){
        axios.get('https://pokeapi.co/api/v2/type/dark')
            .then(data => {
                setFewPokes(data);
            })
    }



    return (
        <ItemCarouselContext.Provider value={{pokeType, handleTypeClick, fewPokes}}>
            {children}
        </ItemCarouselContext.Provider>
    )
}

export default ItemCarouselProvider;