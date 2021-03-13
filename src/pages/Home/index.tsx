import React from 'react';

import AsideNav from '../../core/components/AsideNav';
import ItemCarousel from '../../core/components/ItemCarousel';
import ShowStats from '../../core/components/ShowStats';

import './styles.scss';
import Pokemons from '../../core/components/Pokemons';

function Home() {
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
                        <ItemCarousel/>
                        <h2>Pokemons</h2>
                        <Pokemons />
                    </main>
                </div>

                
                <ShowStats/>
            </div>
        </div>
    )
}

export default Home;
