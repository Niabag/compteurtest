import React, { useState, useEffect } from 'react';
//import scss
import '../../utils/styles/GlobalStyle.scss'
import './Home.scss'


function Compteur() {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const savedStartTime = localStorage.getItem('globalStartTime');
    if (savedStartTime) {
      const startTime = new Date(parseInt(savedStartTime, 10));
      startCounter(startTime);
    }
  }, []);

  const startCounter = (startTime) => {
    setIsRunning(true);

    setInterval(() => {
      const currentTime = new Date();
      const elapsedTime = currentTime - startTime;

      const totalSeconds = Math.floor(elapsedTime / 1000);
      const years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
      const months = Math.floor((totalSeconds % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));
      const days = Math.floor((totalSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
      const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = totalSeconds % 60;

      setTimeElapsed({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);
  };

  const handleStart = () => {
    const startTime = new Date();
    localStorage.setItem('globalStartTime', startTime.getTime());
    startCounter(startTime);
  };

  return (
    
      <div className="container">
      <h1>Crypto Moon</h1>

      <div className='wrapper'>
        <div className='wrapper-time'>
        <p>Années</p>
        <p>{timeElapsed.years}</p>
        </div>

        <div className='wrapper-time'>
        <p>Mois</p>
        <p>{timeElapsed.months}</p>
        </div>

        <div className='wrapper-time'>
        <p>Jours</p>
        <p>{timeElapsed.days}</p>
        </div>

        <div className='wrapper-time'>
        <p>Heures</p>
        <p>{timeElapsed.hours}</p>
        </div>

        <div className='wrapper-time'>
        <p>Minutes</p>
        <p>{timeElapsed.minutes}</p>
        </div>

        <div className='wrapper-time'>
        <p>Secondes</p>
        <p>{timeElapsed.seconds}</p>
        </div>   
      </div>

      {!isRunning && <button onClick={handleStart}>Lancement</button>}
    </div>
  );
}

function Home() {
  return (
    <div className="App">
      <Compteur />
    </div>
  );
}

export default Home;
