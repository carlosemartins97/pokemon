import React from 'react';

import pokeballImg from '../../assets/pokeball.svg';

import {AiOutlineSearch, AiFillHome} from 'react-icons/ai'

import './styles.scss';

const AsideNav: React.FC = () => {
    return (
        <div className="aside-container">
            <a href="/" className="aside-logo">
                <img src={pokeballImg} alt="Pokebola"/>
            </a>

            <ul className="aside-nav">
                <li className="aside-links">
                    <a href="/"><AiFillHome /></a>
                </li>
                
                <li className="aside-links">
                    <a href="/"><AiOutlineSearch /></a>
                </li>
            </ul>
        </div>
    )
}

export default AsideNav;