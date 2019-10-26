import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const emailValidation=(email)=>{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const loginPayload=()=>{
    let loginUserPayload={};
    let ogLoginEmail = document.getElementsByName('email')[0].value;
    let loginPassword = document.getElementsByName('password')[0].value;
    let loginEmail = ogLoginEmail.toLowerCase();
    if (emailValidation(loginEmail) && loginPassword.length>=7){
        loginUserPayload={
            email:loginEmail,
            password:loginPassword
        }
        console.log('loginUserPayload ', loginUserPayload)
    }else if(emailValidation(loginEmail) && loginPassword.length<7){
        alert("password is not long enough")
    }else if( emailValidation(loginEmail) === false && loginPassword.length>7){
        alert('not a valid email')
    }else{
        alert('email and password are not valid')
    }
}

class LoginComponent extends React.Component {
    render() {
        return(
        <div className='signUpPage'>

            {/* render the logo (component) */}

            <Form>
                {/* render the username */}
                <Form.Group controlId="formUserName">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>
                {/* render the password */}
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
            </Form>

            {/* button component with props passed in for each button */}
            <Button onClick={loginPayload} variant="outline-primary" className='login'>Login</Button>

        </div>
        )
    }


}

export default LoginComponent;