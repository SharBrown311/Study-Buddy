import React, { useState, useContext } from "react";
import AuthForm from './AuthForm'
import { UserContext } from "../context/UserProvider";
import './Auth.css'


const initInputs = { username: "", password: "" };

export default function Auth() {
  const [inputs, setInputs] = useState(initInputs);
  const [toggle, setToggle] = useState(false);

  const { signup, login, errMsg, resetAuthError } = useContext(UserContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSignup(e) {
    e.preventDefault();
    signup(inputs);
  }

  function handleLogin(e) {
    e.preventDefault();
    login(inputs);
  }

  function toggleForm() {
    setToggle((prev) => !prev);
    resetAuthError();
  }



  return (
    <div className="Auth container">
      <div className="head-container"></div>
      {!toggle ? (
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign Up"
            errMsg={errMsg}
          />
          <p className="toggle-text" onClick={toggleForm} style = {{color: "blue"}}
          >Already a Member?</p>
  
        </>
      ) : (
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
            errMsg={errMsg}
          />
          <p className="toggle-text" onClick={toggleForm} style = {{color: "blue"}}>Not a member?</p>
        </>
      )}
    </div>
  );
}


