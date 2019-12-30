    import React from 'react';
    import { Form, Button } from 'react-bootstrap';

    class AdminLoginPage extends React.Component {
        handleButtonClick = (event) => {
            event.preventDefault()
            const loginFormData = {
                email: this.email.value,
                password: this.password.value
            }
            console.log('handle')
            console.log(event.currentTarget)
            console.log(this.password.value)
            console.log(this.email.value)
            console.log(loginFormData)
        }
        render() {
            return (
                <Form 
                    //noValidate
                    className='p-4 m-auto col-3' 
                    onSubmit={this.handleButtonClick}
                >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control
                            ref={(input) => this.email = input} 
                            required 
                            type="email"  
                            placeholder="Enter email" 
                        />
                        <Form.Text className="text-muted">
                        Please enter a valid email address.
                        </Form.Text>
                    </Form.Group>
        
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            ref={(input) => this.password = input} 
                            required
                            type="password" 
                            placeholder="Enter Password" 
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label='Remember me'/>
                    </Form.Group>
                    <Button 
                        variant='info' 
                        type='submit' 
                        size='md' 
                        block 
                    >
                        Submit
                    </Button>
                </Form>
            )
        }
    
    }

    export default AdminLoginPage;