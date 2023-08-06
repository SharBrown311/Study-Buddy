import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Study from "./Study"
import Timer from "./Timer"
import StopWatch from "./StopWatch"
import Quiz from "./Quiz"
import "./Study.css"

function StudyContainer() {
  const userAxios = axios.create();
  userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;

  return config;
})

  const [decks, setDecks] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    userAxios.get('/api/decks')
      .then(response => setDecks(response.data))
      .catch(error => console.log(error));
  }, []);
  
  useEffect(() => {
    if (selectedDeck) {
      userAxios.get(`/api/cards/${selectedDeck._id}`)
        .then(response => setCards(response.data))
        .catch(error => console.log(error));
    } else {
      setCards([]);
    }
  }, [selectedDeck]);
    
  const [showQuiz, setShowQuiz] = useState(false);
  const [showStudy, setShowStudy] = useState(false);
  

  const swapQuizState = () => {
    setShowStudy(false)
    setShowQuiz(!showQuiz)
  }

  const swapStudyState = () => {
    setShowQuiz(false)
    setShowStudy(!showStudy)
  }

  return (
    <div className='Study-Container'>
    <div className='timers-and-list-container'>
    <div className='timers-section'>
      <Timer />
      <StopWatch />
    </div>
    <div>  
      <br/>
    <label htmlFor="deck-select">Select a deck:</label>
      <select id="deck-select" onChange={(e) => setSelectedDeck(decks.find(deck => deck._id === (e.target.value)))}>
        <option value=""></option>
        {decks?.map(deck => 
          <option key={deck._id} value={deck._id}>{deck.title}</option>)}
      </select>
<div className="question-list">
  <br />
<div>
    {!showStudy && showQuiz?
      cards?.map((card, index) => <Quiz key = {index} showQuiz = {showQuiz} data = {card} index = {index} cards = {cards} />) 
    :  
    !showQuiz && showStudy?
      cards?.map((card, index) => <Study key = {index} showStudy = {showStudy} data = {card} index = {index} cards = {cards} />) 
    :
      ''
  }
</div>
      <div className="button-container">
        <button onClick={() => swapQuizState()}>Start Quiz</button>
        <button onClick={() => swapStudyState()}>Study Cards</button>
      </div>
    </div>
  </div>
  </div>
  </div>
);
}

export default StudyContainer