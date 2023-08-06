import React, {useContext} from 'react'
import Navbar from './components/Navbar'
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import Protected from './components/Protected'
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard'
import { UserContext } from './context/UserProvider'
import Auth from './components/Auth'
import './App.css'
import Footer from './components/Page-Components/Footer'

export default function App(){
  const {token, logout} = useContext(UserContext)
  return(
    <div className='App'>
      {token && <Navbar logout = {logout} />}
      <Routes>
      <Route exact path = "/" element = {token ? <Home /> : <Auth/>} />
      <Route path = "/dashboard" element = {
      <Protected token = {token}><Dashboard /> </Protected>
      } />
      </Routes>
      <Footer />
    </div>
  )
}
