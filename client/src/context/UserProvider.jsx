import React, { useState, createContext } from "react";
import axios from "axios";

export const UserContext = createContext();


const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    errMsg: ""
  };



  const [userState, setUserState] = useState(initState);
  const [page, setPage] = useState("")

  
//axios functions
//works
function signup(credentials){
  axios.post("/auth/signup", credentials)
  .then(res => {
    const {user, token} = res.data
    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(user))
    setUserState(prev => ({
      ...prev, 
      user, 
      token
    }))
    localStorage.setItem("userState", userState)
  })
  .catch(err => handleAuthErr(err.response.data.errMsg))
}

  //Login
  //works
  function login(credentials) {
    axios
      .post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => handleAuthErr(err.response.data.errMsg));
  }

  //Logout -Resets the state
  //works
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserState({
      user: {},
      token: ""
    });
  }

  //Display Error Message to the User
  function handleAuthErr(errMsg) {
    setUserState((prevState) => ({
      ...prevState,
      errMsg,
    }));
  }

  //Reset Auth Error
  function resetAuthError() {
    setUserState((prevState) => ({
      ...prevState,
      errMsg: "",
    }));
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        resetAuthError, 
        page, 
        setPage
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
