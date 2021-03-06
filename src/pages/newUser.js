import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import axios from 'axios';
import "./newUser.css"

// more detailed validation on the backend
const emailValidation=(email)=>{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// name validation
const nameValidation = (name)=>{
    return /^[a-zA-Z]+(?:-[a-zA-Z]+)* [a-zA-Z]+(?:-[a-zA-Z]+)*/.test(name)
}

// function to capture all inputs and package it up to send to db
const newUserPayload = () =>{
    console.log('clicked')
    let userPayload = {};
    let newName = document.getElementsByName('name')[0].value;
    let newEmail = document.getElementsByName('email')[0].value;
    let newPassword = document.getElementsByName('password')[0].value; 
    let newPasswordConfirm = document.getElementsByName('confirm-password')[0].value; 
    if (nameValidation(newName) && emailValidation(newEmail)&& newPassword.length>=7 && newPassword=== newPasswordConfirm){
        userPayload = {
            Name:newName,
            email:newEmail,
            password:newPassword,
            confirmation:newPasswordConfirm
        }
        
        axios.post('http://localhost:3001/api/signup', {
               userPayload
            })
                  .then(function(response){
                  console.log("response", response.data.response.user_id)
                  let user = response.data.response.user_id
                  localStorage.setItem("uid", user)
                  console.log(response.data.redir.redirect)
                  if (response.data.redir.redirect === "/calendar") {
                    window.location = "/calendar";
                  }
                  
                })
                .catch(function(error){
                  console.log(error)
                })

        // clear all input fields
        // console.log(userPayload)
    }else if (nameValidation(newName) === false && emailValidation(newEmail)&& newPassword.length>=7&& newPassword=== newPasswordConfirm){
        alert('You need to enter a first and last name')
    }else if (nameValidation(newName) && emailValidation(newEmail)=== false&& newPassword.length>=7&& newPassword=== newPasswordConfirm){
        alert('Not a valid email')
    }else if(nameValidation(newName) && emailValidation(newEmail)&& newPassword.length< 7&& newPassword=== newPasswordConfirm){
        alert('password is not long enough')
    }else if(nameValidation(newName) && emailValidation(newEmail)&& newPassword.length< 7&& newPassword!== newPasswordConfirm){
        alert('passwords do not match')
    }else{
        alert('Something went wrong, please try again.')
    }
}



class Signup extends React.Component {
    render() {
        return(
        <div id='signUpPage'>

            {/* render the logo (component) */}

            <Form className='signup-form'>
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
                <Form.Group controlId="formGroupConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name='confirm-password' type="password" placeholder="Password" />
                </Form.Group>
            </Form>

            {/* button component with props passed in for each button */}
            <Button variant="outline-success" className="newUser-button" id="createNewUser" onClick={newUserPayload}>Create User</Button>
            <button  className="newUser-button">
            <Link to="/loginComponent" id='link-button' className="newUser-button"> Already a member</Link>
            </button>
        </div>
        )
    }


}

export default Signup;