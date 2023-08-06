import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer id="newsletter" className='Footer'>
    <div className="container footer-content">
      <div className="row">
      </div>
      <div className="row">
        <div className="col-lg-3">
          <div className="footer-widget">
            <div className='contact-container'>
            <h4 style={{textDecoration: 'underline'}}>Contact Us</h4>
            <p>Somewhere - USA, 12345-678, Earth </p>
            <p>(010) 867-5309</p>
            <p><a href="#">Study_Buddy@company.com</a></p>
          </div>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-3">
          <div className="footer-widget">
            <h4 style={{textDecoration: 'underline'}}>Useful Links</h4>
            <p><a href="https://www.brainscape.com/academy/how-to-take-notes/">How to Take Effective Notes</a></p>
            <p><a href='https://www.oxfordlearning.com/how-to-study-effectively/'>Developing Good Study Habits</a></p>
            <p>< a href = "https://www.usa.edu/blog/study-techniques/">Study Methods</a></p>
          </div>
        </div>
        </div>
        </div>
        <div className="col-lg-12">
          <div className="copyright-text">
          <div className="col-lg-3">
          <div className="footer-widget">
            <div className="logo">
              <div className='study-buddy-logo'></div>
            </div>
          </div>
          <div className='copyright-container'>
           <li style={{color: "#fff"}}>Copyright © 2023<li>
              Developed & Designed By:</li> <ul className='authors-container'>
                  <li style={{color: "#fff"}}><a style={{color: "#fff", fontStyle: "italic"}} href = "https://github.com/ConradRhoades22">Conrad Rhoades</a></li>
                  <li style={{color: "#fff"}}><a style={{color: "#fff", fontStyle: "italic"}} href = "https://github.com/Voskii">Kyle Shutt</a></li>
                  <li style={{color: "#fff", fontStyle: "italic"}}><a style={{color: "#fff", fontStyle: "italic"}} href = "https://github.com/SharBrown311">  Sharon Brown</a></li>
                </ul>
            </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer