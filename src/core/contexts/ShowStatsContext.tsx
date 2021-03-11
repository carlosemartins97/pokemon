import React, {createContext, ReactNode} from 'react';

interface ShowStatsContextData {

}

interface ShowStatsProviderProps {
    children: ReactNode;
}


export const ShowStatsContext = createContext({} as ShowStatsContextData);

function ShowStatsProvider({children}: ShowStatsProviderProps){
    return (
        <ShowStatsContext.Provider value={{}}>
            {children}
        </ShowStatsContext.Provider>
    )
}