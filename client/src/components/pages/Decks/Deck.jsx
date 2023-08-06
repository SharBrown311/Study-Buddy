import React, { useState} from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css'

export default function Deck(props){

    const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

    const {data, index, decks, setDecks} = props
    console.log(data)
    const [cards, setCards] = useState([])
    const [showCard, setShowCard] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [noCards, setNoCards] = useState(false)

    const anyCards = (cards) => {
        console.log(`inside any cards compontent:`, cards)
        if(cards == []){
            setNoCards(false)
        }
    }

    const delDeck = (deckId) => {
        if(cards.length === 0){
            console.log('deleted:', deckId)
            userAxios.delete(`/api/decks/${deckId}`)
            .then(res => {
                setDecks(prev => prev.filter(deck => deck._id !== deckId))
            })
            .catch(err => console.log(err))
        }
    }

    const popCards = (deckId) => {
        setClicked(true)
        
        userAxios.get(`/api/cards/${deckId}`)
            .then(res => {
                setCards(res.data)
                anyCards(res.data)
            })
            .catch(err => console.log(err))
           
        setShowCard(!showCard)
    }

//deck
    return (
        <div className  = "Deck">
            {showCard? <button onClick={()=>{setShowCard(!showCard)}}>Close Deck</button> : ''}
            {showCard?
            cards.map((card, index) => <Card key={index} data={card} index={index} cards={cards} setCards={setCards} showCard={showCard} setShowCard={setShowCard} deckVisible={true}/>)
            :
            ''
            }
        <div className='deck' onClick={() => popCards(data._id)}>
            <div  className='title-amount-deck'>
            <h2>{data.title}</h2>
                <div>
                    <h2 className='card-length'>{cards.length === 0? '': `Cards:${cards.length}`}</h2>
                    </div>
                    {cards.length === 0 && clicked ?
                    
                        <div>
                            <button className='deleteDeck' onClick={() => delDeck(data._id)}
                            >Delete Deck</button>
                        </div>
                    :
                    ''
                    }
                    
                </div>
        </div>
        </div>
    )
}