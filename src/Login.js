import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';

function Login() {
  const history = useHistory();  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = e => {
      e.preventDefault();
      // firebase login
      auth.signInWithEmailAndPassword(email, password)
      .then(auth => {
          history.push('/')
      })
      .cath(error => alert(error.message))

  } 
  const register = e => {
      e.preventDefault();
      // firebase register
      auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
          console.log(auth);
          if(auth){
              history.push('/')
          }
      }).catch(error => alert(error.message))
      
  }
  return (
    <div className="login">
        <Link to='/'>
            <img
                className="login_logo"
                src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
                alt="" 
            />
        </Link>
        <div className="login_container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <Button
                    style={{
                    borderRadius: 10,
                    backgroundColor: "#5cc8e6",
                    padding: "10px 15px",
                    fontSize: "15px",
                    width: "100%"
                }}
                type='submit' 
                onClick={signIn}
                variant="contained"
                >Sign -In</Button>
                </form>
                <p>
                    By signing-in you agree to the  <strong>EyeFLix</strong><small>Inc.</small> Conditions of use & Sale. PLease see our Privacy Notice, our Cookies Notice and our Intrest-Based Ads Notice.
                </p>
                <Button 
                style={{
                    borderRadius: 10,
                    backgroundColor: "lightgray",
                    padding: "10px 15px",
                    fontSize: "15px"
                }}
                onClick={register}
                variant="contained"
                > <p>Create the <strong>EyeFLix</strong><small>Inc.</small> account</p></Button>
               
            
        </div>
    </div>
  )
}

export default Login