import React from 'react';
import { withRouter, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

class App extends React.Component {

    render() {
        return (
            <div className='App'>
                <Route
                    path='/'
                    render={() => <HomePage/>}
                />
            </div>
        )
    }
}

export default withRouter(App)
