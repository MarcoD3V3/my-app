'use client';
import styles from './GameClicker.module.scss';
import React, { useState, useEffect, useRef } from 'react';
import {GameTypingLayout} from './components/layout'


export default function GameClicker() {
  const [time, setTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const inputRef = useRef(null);

  const handleStart = () => {
    const inputTime = parseInt(inputRef.current.value, 10);
    setTime(inputTime);
    setRemainingTime(inputTime);
    setClickCount(0);
  };

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    let inputNumber = document.getElementById('inputNumber').value
    if (remainingTime > 0) {
      const timer = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
    else if (inputNumber == 0) {
      return console.log("")
    }else {
      // Lógica para ejecutar tu función al finalizar el contador
      // Aquí puedes llamar a la función que deseas ejecutar

      // Mostrar el número de clicks realizados
      let inputNumber = document.getElementById('inputNumber').value
      let resultado = clickCount / inputNumber;
       alert(resultado)
    }
  }, [remainingTime]);
  

  return (
    <div className={styles.GameClicker}>
        <h1>GameClicker</h1>
        <p>You clicked {clickCount} times</p>
        <div className={styles.Clicker__bar} onClick={() => setClickCount(clickCount + 1)}>
          holaa
      </div>
      <div>
          <input 
          id='inputNumber' 
          type="range"
          min="10"
          max="100"
          step="10"
          ref={inputRef} />
          <button onClick={handleStart}>Start</button>
          <h1>{remainingTime}</h1>
          <div onClick={handleClick}>Hacer clic aquí</div>
      </div>
      </div>
  );
}
