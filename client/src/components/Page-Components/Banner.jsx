import React from 'react'

function Banner() {
  return (
    <div id = "top Banner" className="main-banner wow fadeIn animated"  data-wow-duration="1s" data-wow-delay="0.5s" style={{animationDuration: "1s", animationDelay: "0.5s"}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <div className="row">
                  <div className="col-lg-12">
                    <h2>Study Buddy</h2>
                    <p>Mastering the Learning Process</p>
                  </div>
                  <div className="col-lg-12">
                    <div className="white-button first-button scroll-to-section">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src="assets/images/slider-dec.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner