
import React, { useState } from 'react';
import Card from '../Decks/Card';



function Quiz(props) {
  const { cards, data } = props;
  const [cardIndex, setCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNextCard = () => {
    setShowAnswer(false);
    if (cardIndex + 1 < cards.length) {
      setCardIndex(cardIndex + 1);
    }
  };

  return (
    <div className='Quiz container'>
      {cardIndex < cards.length ? (
        <div>
          <h3>Card {cardIndex + 1} of {cards.length}</h3>

          <Card className="card-component-quiz" card={cards[cardIndex]} data={data} showAnswer={showAnswer} isQuizComp={true} />
          {!showAnswer && <button className='answer-quiz-button' onClick={() => setShowAnswer(true)}>Show Answer</button>}

          {showAnswer && (
            <div className='correct-and-incorrect'>
              <button className='next-card-button' onClick={handleNextCard}>Next Card</button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h3>Quiz Complete!</h3>
          <p>You have completed all the cards.</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;