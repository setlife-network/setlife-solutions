import React from 'react';
import { Jumbotron, Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const MainBanner = (props) => {
    return (
        <Jumbotron className='MainBanner row' fluid> 
            <div className='overlay'></div>
            <Container className='m-auto col-12'>
                <h1>CTO as a Service</h1>
                <p>
                We'll engineer software solutions to provide you with the
                latest tech and business tools for your upcoming projects
                </p>
            </Container>
            <div className='m-auto col-12'>
                <Button className='m-auto' 
                variant="secondary">View all Services</Button>
            </div>
            
        </Jumbotron>
    )
}

export default MainBanner








