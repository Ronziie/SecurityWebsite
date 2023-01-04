import React, { useEffect } from 'react'
import { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import '../Main.css';
import logo from '../images/login.svg'
import { useNavigate } from 'react-router-dom';


export default function Signup() {

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  // store e target value username in local storage...
  useEffect(() => {
    if (setUsernameReg.length  > 0 && setPasswordReg.length > 0) {
      localStorage.setItem('user', JSON.stringify(usernameReg));
      localStorage.setItem('password', JSON.stringify(passwordReg));
    }
  }, [usernameReg, passwordReg]);



  //function to navigate to next page if input is entered otherwise "input requried message"

  //"input required message" 


  //check if something is written in the input field if NO pop up message if YES navigate to next page 
  const signUpButton = () => {
    if (usernameReg.length === 0 && passwordReg.length === 0) {
      return window.alert("This field cannot be empty, Enter a Username and Password");
    } else {
      return navigate("/Login")
    }
  }
  
  let navigate = useNavigate(); //let navigate to another page

  /*const LogIn = () => {
    return navigate("/Login")
  }*/

  return (
        <Container style={{padding:0 }}>

                  <div className="App">
                    <h1>Welcome</h1>
                    <span className='logo'>
                      <img src={logo} alt="logo"></img>
                    </span>
                    <Row>
                      <Col></Col>
                      <Col xs={5}>
                        <div className='registration'>
                          <h1>Registration</h1>
                          <label>Username</label>
                          <input id="icon" style={{textIndent: "30px"}} type="text" placeholder='Username' value={usernameReg} onChange={(e) => {setUsernameReg(e.target.value)}} required/>

                          <label>Password</label>
                          <input id="icon2" style={{textIndent: "30px"}} type="password" placeholder='Password' value={passwordReg} onChange={(e) => {setPasswordReg(e.target.value)}}  required/>
                        </div>

                        <div className="btn-reg">
                          <button class="btn btn-outline-primary bg-light text-dark" onClick={signUpButton}>Sign Up!</button>
                        </div>
                      </Col>
                      <Col></Col>
                    </Row>
                  </div>
        </Container>

  )
}
