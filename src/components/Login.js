import React from 'react'
import { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import '../Main.css';
import userAvatar from '../images/usersvg.svg'
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [usernameLogin, setUsernameLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')

  //pull data from localstorage
  const Usercredentials = JSON.parse(localStorage.getItem('user'));
  const Passcredentials = JSON.parse(localStorage.getItem('password'));
  
  //if details inputted are same as credentials in LocalStorage show message
  const LoginButton = () => {
    if (usernameLogin === Usercredentials && passwordLogin === Passcredentials) {
      return navigate("/Dashboard")
    } else {
      return window.alert("INCORRECT USERNAME OR PASSWORD PLEASE CHECK DETAILS") 
    }
  }

  let navigate = useNavigate(); //let navigate to another page

  /*const LogIn = () => {
    return navigate("/dashboard")
  }*/

  return (
        <Container style={{padding:0 }}>

                  <div className="App">
                    <h1>Welcome Back!</h1>
                    <span className='logo'>
                      <img src={userAvatar} alt="logo"></img>
                    </span>
                    <Row>
                      <Col></Col>
                      <Col xs={5}>
                        <div className='registration'>
                          <h1>Getting Started!</h1>
                          <label>Username</label>
                          <input id="icon" style={{textIndent: "30px"}} type="text" placeholder='Username' onChange={(e) => {setUsernameLogin(e.target.value)}} required/>

                          <label>Password</label>
                          <input id="icon2" style={{textIndent: "30px"}} type="password" placeholder='Password' onChange={(e) => {setPasswordLogin(e.target.value)}} required/>

                        </div>

                        <div className="btn-reg">
                          <button class="btn btn-outline-primary bg-light text-dark" onClick={LoginButton}>Login</button>
                        </div>
                      </Col>
                      <Col></Col>
                    </Row>
                  </div>
        </Container>

  )
}


//LOGIN PAGE NEXTTT