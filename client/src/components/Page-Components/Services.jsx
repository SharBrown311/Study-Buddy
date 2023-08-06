import React from 'react'

function Services() {
  return (
    <div id="services" className="pricing-tables Services">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="services-item pricing-item-regular">  <h4>Create Your Own Custom FlashCards</h4>
            <div className="icon">
              <div className='customization-icon'>
              </div>
            </div>
            <ul>
              <li>Make a Deck of FlashCards Based on any Subject</li>
              <li>Customize Your FlashCards to Suit Your Needs</li>
              <li>Change the Background Color For Your Learning Benefit</li>
              <li></li>
            </ul>
            <div className="border-button">
              <a href="#">Create FlashCards Now!</a>
            </div>
          
          </div>
        </div>
        <div className="col-lg-4">
          <div className="services-item-pro pricing-item-pro">
          <h4>Quizzes</h4>
            <div className="icon">
           <div className='quiz-icon'></div>
            </div>
            <ul>
              <li>After Creation of FlashCards Use Our Quiz & Study Section</li>
              <li>Timing Capabilities Built in</li>
              <li>Get Graded and Redo Cards You May Have Gotten Incorrect</li>
            </ul>
            <div className="border-button">
              <a href="#">Quiz Yourself Now!</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="services -item-regular pricing-item-regular">
            <h4>Store and Learn In One Place</h4>
            <div className="icon">
              <div className='notes-icon'></div>
            </div>
            <ul>
              <li>Type out and Store All Notes</li>
              <li>Upload Notes in Our Application to Create FlashCards</li>
              <li>No Need to Use Any Other Resources</li>
            </ul>
            <div className="border-button">
              <a href="#">Take Notes Now!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default Services