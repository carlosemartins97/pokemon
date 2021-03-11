import React, { useContext } from 'react';
import { ItemCarouselContext } from '../../contexts/ItemCarouselContext';

import './styles.scss';

function ItemCarousel(){

    const { pokeType, handleTypeClick } = useContext(ItemCarouselContext);

    return (
        <div className="container-carousel">
            <h2>tipos</h2>

            <div className="swiper-container">
            {pokeType?.data.results.map(type => {
                        return (
                            <button 
                                type="button"
                                key={type.name}
                                className="btn-types"  
                                onClick={handleTypeClick}  
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