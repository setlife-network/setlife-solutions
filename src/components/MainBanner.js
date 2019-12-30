import React from 'react';
import { Jumbotron, Container} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const MainBanner = (props) => {
    return (
        <Jumbotron className='MainBanner row' fluid> 
            <Image
                className=''
                // style='background-image: '
                // src='../components/Images/img.jpg'
                fluid
            />
            <Container className='m-auto col-12'>
                <h1>CTO as a Service</h1>
                <p>
                We'll engineer software solutions to provide you with the
                latest tech and business tools for your upcoming projects
                </p>
            </Container>
            <div className='m-auto col-12'/*className='col-12 flex-column col-md-2'*/>
                <Button className='m-auto' 
                variant="secondary">View all Services</Button>
            </div>
        </Jumbotron>

    )
}

export default MainBanner








