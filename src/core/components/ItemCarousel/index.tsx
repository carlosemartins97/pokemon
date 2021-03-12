import React, { useContext } from 'react';
import { ItemCarouselContext } from '../../contexts/ItemCarouselContext';

import './styles.scss';

function ItemCarousel(){

    const { pokeType, handleTypeClick } = useContext(ItemCarouselContext);

    return (
        <div className="container-carousel">
            <h2>tipos</h2>

            <div className="swiper-container">
            {pokeType?.data.results.map((type, index) => {
                        type.name === 'unknown' && pokeType.data.results.splice(index, 2) //remove type 'unknown' and type 'shadow' that doesn't have any pokemon.
                            
                        return (
                            <button 
                                type="button"
                                key={type.name}
                                className="btn-types"  
                                onClick={() => handleTypeClick(`${type.name}`)}  
                            >
                                {type.name}
                            </button>
                        )
                    })}
            </div>
        </div>
    );
};

export default ItemCarousel;