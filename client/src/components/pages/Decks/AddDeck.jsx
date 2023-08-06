
import React, { useState } from "react"
import axios from "axios"
import "./Deck.css"



function AddDeck(props) {

  const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});


  const {addDeckMode, setAddDeckMode, setUserDeck, userDeck, addCardMode, setAddCardMode, userCard, setUserCard, getDecks}  = props
  const [newDeckId, setNewDeckId] = useState('')
  const [cards, setCards] = useState([])


  const backOut = (arr) => {
    getDecks()

    setAddCardMode(!addCardMode)
    setAddDeckMode(!addDeckMode)
  }

  const handleDeckChange = (e) => {

    setUserDeck({
      title: e.target.value,
      flashcards: 0
    })
  }

  const handleCardChange = (e) => {
    const {name, value} = e.target

    setUserCard(prev => ({
      ...prev,
      [name]: value
    }))

  }

  const createDeck = (newDeck) => {
    console.log(newDeck)
    if(newDeck.title){
      userAxios.post('/api/decks', newDeck)
        .then(res => {
          setNewDeckId(res.data)
          setUserCard(prev => {
            return ({
              ...prev,
              deckId: res.data
          })  
        })
        })
        .catch(err => {
          console.log(err)
        })
    
    setAddCardMode(!addCardMode)
    }
    
  }

  const createCard = (card) => {
    if(card.question && card.answer){
      setCards(prev => ([
      ...prev,
      {
        question: card.question,
        answer: card.answer,
        deckId: newDeckId
      }
    ]))
    //add newCard
    userAxios.post('/api/cards', card)
        .then(res => {
          console.log(`inside create card result:`, res)
        })
        .catch(err => {
          console.log(err)
        })
    setUserCard(prev => {
      return ({
        question: '',
        answer: '',
        deckId: newDeckId
      })  
    })
    }
  }

  return (
    <div>
      <div className="AddDeck">
        <div className='buttons'>
        {addDeckMode && !addCardMode?<button onClick={()=>{createDeck(userDeck)}}>Next</button>:''}
        {addCardMode?<button onClick={()=>{createCard(userCard)}}>Create Card</button>:''}
      </div>
      <div className='deck-component'>
        <div className={addCardMode? 'databox2': 'databox'}>
          {addCardMode?
          <div className='new-deck-info'>
          <div className="card-builder">
          <h2 className="title-card">Build your card!</h2>
            <input type='text' 
              placeholder='What is the Question?' 
              onChange={handleCardChange}
              name="question"
              value={userCard.question}
              className="card-builder-question"
            >
            </input>
  
            <input type='text' 
              placeholder='What is the Answer?' 
              onChange={handleCardChange}
              name="answer"
              value={userCard.answer}
              className="card-builder-answer"
            >
            </input>
            <button onClick={()=>{backOut(cards)}} className="new-deck-info finish-butt">   
            Exit Card Builder and Go Back</button>
            </div>
        </div>
        :
        <div className='new-deck-info'>
            <div>
            <h2 className="title-deck">Deck Title Name</h2>
              <input type='text' 
              placeholder="..."
                onChange={handleDeckChange}
                name="title"
              >
              </input>
              </div>
          </div>
          }
        </div>
      </div>
      </div>
    </div>
  )
}

export default AddDeck