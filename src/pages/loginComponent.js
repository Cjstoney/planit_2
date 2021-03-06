import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import './loginComponent.css'
// simple test for email format. Stricter validation to be done on the backend.
const emailValidation = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const loginPayload = () => {
  let loginUserPayload = {};
  let ogLoginEmail = document.getElementsByName("email")[0].value;
  let loginPassword = document.getElementsByName("password")[0].value;
  let loginEmail = ogLoginEmail.toLowerCase();
  if (emailValidation(loginEmail) && loginPassword.length >= 7) {
    // checking for valid email format and password length
    loginUserPayload = {
      email: loginEmail,
      password: loginPassword
    };

    axios
      .post("http://localhost:3001/api/login", {
        loginUserPayload
      })
      .then(function(response) {
        let user = response.data.response.user_id.toString();
          // console.log(response);
        localStorage.setItem("uid", user);
        // console.log(response.data.redir);
        if (response.data.redir.redirect === "/calendar") {
          window.location = "/calendar";
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  } else if (emailValidation(loginEmail) && loginPassword.length < 7) {
    alert("password is not long enough");
  } else if (
    emailValidation(loginEmail) === false &&
    loginPassword.length > 7
  ) {
    alert("not a valid email");
  } else {
    alert("email and password are not valid");
  }
};

class LoginComponent extends React.Component {
  render() {
    return (
      <div className="signUpPage">
        <h3 id='login-title'>Welcome Back</h3>
        <Form>
          {/* render the username */}
          <Form.Group controlId="formUserName">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>
          {/* render the password */}
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
        </Form>

        {/* button component with props passed in for each button */}
        <Button
          onClick={loginPayload}
          variant="outline-primary"
          className="login"
        >
          Login
        </Button>
      </div>
    );
  }
}

export default LoginComponent;
