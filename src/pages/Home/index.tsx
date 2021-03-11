import React, { useEffect, useState } from 'react';

import axios from 'axios';

import AsideNav from '../../core/components/AsideNav';
import ItemCarousel from '../../core/components/ItemCarousel';
import ShowStats from '../../core/components/ShowStats';

import './styles.scss';
import Pokemons from '../../core/components/Pokemons';

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

interface Type {
    data: {
        results: {
            name: string;
        }[]
    }
}

function Home() {
    const [poke, setPoke] = useState<Pokemon>();
    const [pokeType, setPokeType] = useState<Type>();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/25')
            .then(data => {
                setPoke(data);
            })

        axios.get('https://pokeapi.co/api/v2/type')
            .then(data => {
                setPokeType(data);
            })
    },[])


    return(
        <div className="container">
            <AsideNav />
            <div className="wrapper-content">
                <div className="content">
                    <header className="content-header">
                        <h1>Bem vindo(a) ao <span className="content-app-name">LOCALIZAMON</span></h1>
                        <p>Aqui você poderá navegar pelos tipos de pokemons e conhecer mais sobre cada um deles.</p>
                    </header>

                    <main className="content-main">
                        <ItemCarousel types={pokeType}/>
                        <Pokemons />
                    </main>
                </div>

                
                <ShowStats pokemon={poke}/>
            </div>
        </div>
    )
}

export default Home;
