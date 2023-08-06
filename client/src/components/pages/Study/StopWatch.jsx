import React, { useState, useEffect } from 'react';
import "./Study.css"


function StopWatch() {
  const [timerOn, setTimerOn] = useState(false);
  const [timerStart, setTimerStart] = useState(0);
  const [timerTime, setTimerTime] = useState(0);

  useEffect(() => {
    let interval;
    if (timerOn) {
      interval = setInterval(() => {
        setTimerTime(Date.now() - timerStart);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn, timerStart]);

  const startTimer = () => {
    setTimerOn(true);
    setTimerStart(Date.now() - timerTime);
  };

  const stopTimer = () => {
    setTimerOn(false);
  };

  const resetTimer = () => {
    setTimerStart(0);
    setTimerTime(0);
  };

  const centiseconds = ('0' + (Math.floor(timerTime / 10) % 100)).slice(-2);
  const seconds = ('0' + (Math.floor(timerTime / 1000) % 60)).slice(-2);
  const minutes = ('0' + (Math.floor(timerTime / 60000) % 60)).slice(-2);
  // const hours = ('0' + Math.floor(timerTime / 3600000)).slice(-2);

  return (
    <div className='Stopwatch container'>
      <div className='stopwatch-header'>Count Up</div>
      <div className='stopwatch-display'>
       {minutes} : {seconds} : {centiseconds}
      </div>
      <div>
        {!timerOn && timerTime === 0 && <button className='start-button' onClick={startTimer}>Start</button>}
      </div>
      <div>{timerOn && <button className='stop-button' onClick={stopTimer}>Stop</button>}</div>
      <div>
        {!timerOn && timerTime > 0 && <button className='resume-button' onClick={startTimer}>Resume</button>}
      </div>
      <div>
      {timerOn === false ||
        (timerTime !== 0 && timerStart !== timerTime && timerStart !== 0) ? (
        <button className='reset-button' onClick={resetTimer}>Reset</button>
        ) : null
      }
    </div>
    </div>
  );
}

export default StopWatch;