import React from 'react';
import AsideNav from '../../core/components/AsideNav';

import './styles.scss';

const Home: React.FC = () => {
    return(
        <div className="container">
            <AsideNav />
            <div className="wrapper-content">
                <div className="content">
                    <h1>teste</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;