import React from "react"
import "./Deck.css"

function EditCard() {
   return (
    <div>
      <div className='deck-component'>
        <div className='databox'>
          <div className='new-card-info'>
            <h2>Question</h2>z
            <input type='text' placeholder='...' />
            <h2>Answer</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditCard