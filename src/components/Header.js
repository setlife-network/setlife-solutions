import React from 'react';
import { Button, Navbar, Nav} from 'react-bootstrap'

import { SCHEDULING_LINK } from '../constants'

const Header = (props) => {
    return (
        <div className='row p-3 m-auto col-12 bg-secondary shadow-sm'>
            <Navbar 
                className='col-12 col-md-10 text-primary'
                expand='lg'
            >
                <Navbar.Brand href='#home'>LafaTech Solutions</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mx-auto '>
                        <Nav.Link className='mx-3 text-primary' href='#Services'>Services</Nav.Link>
                        <Nav.Link className='mx-3 text-primary' href='#Experience'>Experience</Nav.Link>
                        <Nav.Link className='mx-3 text-primary' href='#Resources'>Resources</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className='col-12 d-flex col-md-2'>
                <a 
                    className='m-auto'
                    href={SCHEDULING_LINK}
                    target='_blank' 
                    rel='noopener noreferrer'
                >
                    <Button                       
                        variant='info'
                    >
                        Free Consultation
                    </Button>
                </a>
                
            </div>
            
        </div>
    )
}

export default Header