import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'
import { UserContext } from '../context/UserProvider'
import Auth from './Auth'


function Navbar() {
  const navigate = useNavigate()
  const {token, logout} = useContext(UserContext)
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  // useEffect(() => {

  // })
  return (
    <div className="header-area header-sticky wow" data-wow-duration="0.75s" data-wow-delay="0s" style={{visibility: "visible", animationDuration: "0.75s",animationDelay: "0s"}}>

    <nav className="topnav" id="myTopnav">
      <button className='nav-button' onClick= {() => navigate("/")}>Home</button>
      <button className='nav-button' onClick = {() => navigate("/dashboard")}>Dashboard</button>
      <button className='nav-button'>
        <a  href = "#services" className='nav-;link'>Features</a>
      </button>
      <button className='nav-button'>      
        <a className='nav-link' href = "#about">About</a>
      </button>
      <button className='nav-button'>
      <a className = "nav-link" href = "#clients">Client Reviews</a>
      </button>
      {token ? (
        <button className='logout-button' onClick={logout}>
          Logout
        </button>
      ) : (
       <div>
        <button className='nav-button' onClick={openModal}>  Login</button>
          <Modal isOpen = {modalOpen} closeModal = {closeModal} >
     

          <Auth />
        </Modal>
        </div>
      )}
    </nav>
    </div>
  )
  }

export default Navbar