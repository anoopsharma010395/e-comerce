import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector} from 'react-redux';
import { updateLoggedinStatus } from './actions/cartActions';
import { useNavigate} from 'react-router-dom';
import '../index.css';

function Login(props) {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const disPatch = useDispatch();
  const isLoggedin = useSelector((state) => state.isLoggedin);
  const isRedirectedFromCheckout = useSelector((state) => state.isRedirectedFromCheckout);
  
  let history = useNavigate();

  useEffect(()=>{
      console.log(isLoggedin);
  })

  // User Login info
  const databases = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = databases.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        
        disPatch(updateLoggedinStatus("loggedin"));
        isRedirectedFromCheckout ? history('/checkout'):history('/');
        //setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );



  return (
    <div className="app login-app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default connect()(Login);
