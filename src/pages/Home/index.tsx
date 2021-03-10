import React, { useEffect, useState } from 'react';

import axios from 'axios';

import AsideNav from '../../core/components/AsideNav';
import ItemCarousel from '../../core/components/ItemCarousel';
import ShowStats from '../../core/components/ShowStats';

import './styles.scss';

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

function Home() {
    const [poke, setPoke] = useState<Pokemon>();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/25')
            .then(data => {
                console.log(data);
                setPoke(data);
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
                        <ItemCarousel />
                    </main>
                </div>

                
                <ShowStats pokemon={poke}/>
            </div>
        </div>
    )
}

export default Home;

{/* <h2>{poke?.data.base_experience} 
                        
<br/>

{poke?.data.abilities.map(item => {
    return (
        <p key={item.ability.name}> {item.ability.name} </p>
    )
})}

<br/>
{poke?.data.name}

<br/>
{poke?.data.id}
<br/>
<img src={poke?.data.sprites.front_default} alt=""/>
<br/>

{poke?.data.weight}
<br/>

{poke?.data.types.map(ty => {
    return (
        <p key={ty.type.name}>{ty.type.name}</p>
    )
})}


</h2> */}