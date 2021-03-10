import React from 'react';

import './styles.scss';

import pikachu from '../../assets/pikachu.png';

const ShowStats: React.FC = () => {
    return (
        <div className="container-show-stats">
            <section className="content-show-stats">
                <h3 className="content-name-pokemon">Pikachu</h3>
                <img src={pikachu} alt=""/>
                <div className="content-stats-info">
                    <p>ID <span>25</span></p>
                    <p>Experiência base <span>107</span></p>
                    <p>Peso <span>200g</span></p>

                    <h4>Três habilidades</h4>
                    <ul className="content-abilities-list">
                        <li>Choque do trovão</li>
                        <li>Evasão</li>
                        <li>Calda de aço</li>
                    </ul>
                </div>

            </section>
        </div>
    )
}

export default ShowStats;