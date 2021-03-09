import React from 'react';
import AsideNav from '../../core/components/AsideNav';

import './styles.scss';

const Home: React.FC = () => {
    return(
        <div className="container">
            <AsideNav />
            <div className="wrapper-content">
                <div className="content">
                    <header className="content-header">
                        <h1>Bem vindo(a) ao <span className="content-app-name">LOCALIZAMON</span></h1>
                        <p>Aqui você poderá navegar pelos tipos de pokemons e conhecer mais sobre cada um deles.</p>
                        <span className="content-header-span">Divirta-se!</span>
                    </header>
                </div>
            </div>
        </div>
    )
}

export default Home;