import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

class Signup extends React.Component {
    render() {
        return(
        <div className='signUpPage'>

            {/* render the logo (component) */}

            <Form>
                {/* render the name input box */}
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter your name" />
                </Form.Group>
                {/* render the username */}
                <Form.Group controlId="formUserName">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                {/* render the password */}
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>

            {/* button component with props passed in for each button */}
            <Button variant="outline-success" className="createNewUser">Create User</Button>
            <Link to="/loginComponent"> Already a member</Link>

        </div>
        )
    }


}

export default Signup;