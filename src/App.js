import React from 'react';
import { withRouter, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AdminLoginPage from './pages/AdminLoginPage';

class App extends React.Component {

    render() {
        return (
            <div className='App'>
                <Route
                    exact
                    path='/admin/login'
                    render={() => <AdminLoginPage/>}
                />
                <Route
                    exact
                    path='/'
                    render={() => <HomePage/>}
                />
            </div>
        )
    }
}

export default withRouter(App)
