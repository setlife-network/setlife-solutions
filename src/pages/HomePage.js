import React from 'react';
import { Jumbotron, Container} from'react-bootstrap';

import Header from '../components/Header';

class HomePage extends React.Component {
    render() {
        return (

            <div className='m-auto'>
                <Header/>
                <Jumbotron fluid>
                    <Container>
                        <h1>Engineer Software Analytical Studies</h1>
                        <p>
                        We will provide you with the latest technological tools for your upcoming projects
                        </p>
                    </Container>
                </Jumbotron>
                
            </div>
        );
    }
}

export default HomePage;
