import React from 'react';

import './styles.scss';

interface Type {
    types?: {
        data: {
            results: {
                name: string;
            }[]
        }
    }
}


function ItemCarousel(props: Type){

    return (
        <div className="container-carousel">
            <h2>tipos</h2>

            <div className="swiper-container">
            {props.types?.data.results.map(type => {
                        return (
                            <button 
                                type="button"
                                key={type.name}
                                className="btn-types"    
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