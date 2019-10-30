import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import axios from 'axios';

// more detailed validation on the backend
const emailValidation=(email)=>{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// name validation
const nameValidation = (name)=>{
    return /^[a-zA-Z]+(?:-[a-zA-Z]+)* [a-zA-Z]+(?:-[a-zA-Z]+)*/.test(name)
}


// clearing the input function
const clearInput = (target) =>{
    
}

// function to capture all inputs and package it up to send to db
const newUserPayload = () =>{
    let userPayload = {};
    let newName = document.getElementsByName('name')[0].value;
    let newEmail = document.getElementsByName('email')[0].value;
    let newPassword = document.getElementsByName('password')[0].value; //need to hash on backend with bcrypt?
    if (nameValidation(newName) && emailValidation(newEmail)&& newPassword.length>=7){
        userPayload = {
            Name:newName,
            email:newEmail,
            password:newPassword
        }
        
        axios.post('http://localhost:3001/api/signup', {
               userPayload
            })
                  .then(function(response){
                  console.log(response)
                })
                .catch(function(error){
                  console.log(error)
                })

        // clear all input fields
        console.log(userPayload)
    }else if (nameValidation(newName) === false && emailValidation(newEmail)&& newPassword.length>=7){
        alert('You need to enter a first and last name')
    }else if (nameValidation(newName) && emailValidation(newEmail)=== false&& newPassword.length>=7){
        alert('Not a valid email')
    }else if(nameValidation(newName) && emailValidation(newEmail)&& newPassword.length< 7){
        alert('password is not long enough')
    }else{
        alert('Something went wrong, please try again.')
    }
}



class Signup extends React.Component {
    render() {
        return(
        <div className='signUpPage'>

            {/* render the logo (component) */}

            <Form>
                {/* render the name input box */}
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="name" placeholder="Enter your name" />
                </Form.Group>
                {/* render the username */}
                <Form.Group controlId="formUserName">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>
                {/* render the password */}
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
            </Form>

            {/* button component with props passed in for each button */}
            <Button variant="outline-success" className="createNewUser" onClick={newUserPayload}>Create User</Button>
            <Link to="/loginComponent"> Already a member</Link>

        </div>
        )
    }


}

export default Signup;