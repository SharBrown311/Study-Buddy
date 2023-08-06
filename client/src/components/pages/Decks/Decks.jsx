import { useState, useEffect } from "react"
import "./Deck.css"
import Deck from "./Deck"
import axios from "axios"
import AddDeck from "./AddDeck"


export default function Decks() {

  const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

  const [decks, setDecks] = useState([])
  const [addDeckMode, setAddDeckMode] = useState(false)
  const [userDeck, setUserDeck] = useState({
    title: '',
    flashcards: 0
  })
  const [addCardMode, setAddCardMode] = useState(false)
  const [userCard, setUserCard] = useState({
    question: '',
    answer: '',
    deckId: ''
  })

    function getDecks(){
      userAxios.get('/api/decks')
      .then(res => setDecks(res.data))
      .catch(err => console.log(err.response))
    }




  useEffect(() => {
    getDecks()
  }, [])

  return (
    <div className="Decks">
      <button className="add-goback-button" onClick={()=>{setAddDeckMode(!addDeckMode)}}>{addDeckMode? 'Back To All Decks' : 'Add Deck'}</button>
      {addDeckMode  ?
          <AddDeck addDeckMode={addDeckMode} 
            setAddDeckMode={setAddDeckMode} 
            userDeck={userDeck} 
            setUserDeck={setUserDeck} 
            addCardMode={addCardMode} 
            setAddCardMode={setAddCardMode}
            userCard={userCard}
            setUserCard={setUserCard}
            getDecks={getDecks}
          />
      :
        <div className='deck-grid'>
          {decks?.map((deck, index) => <Deck key={index} data={deck} index={index} decks={decks} setDecks={setDecks}/>)}
        </div>
      }
    </div>
  )
}