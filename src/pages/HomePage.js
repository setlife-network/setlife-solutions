import React from 'react';

import Header from '../components/Header';
import MainBanner from '../components/MainBanner';

class HomePage extends React.Component {
    render() {
        return (

            <div className='m-auto'>
                <Header/>
                <MainBanner/>
                
            </div>
        );
    }
}

export default HomePage;
