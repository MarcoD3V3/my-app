'use client'
import styles from './GameClicker.module.scss'
import React, { useState, useEffect, useRef } from 'react'
import {
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  Text,
  Slider,
  Flex,
  SliderThumb,
  NumberDecrementStepper,
  SliderTrack,
  SliderFilledTrack,
  Box
} from '@chakra-ui/react'

export default function GameClicker () {
  const [value, setValue] = React.useState(0)
  const handleChange = (value) => setValue(value)

  const [timer, setTime] = useState(0)
  const [remainingTime, setRemainingTime] = useState(0)
  const [clickCount, setClickCount] = useState(0)
  const inputRef = useRef(null)

  const handleStart = () => {
    const inputTime = parseInt(inputRef.current.value, 10)
    setTime(inputTime)
    setRemainingTime(inputTime)
    setClickCount(0)
  }
  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    const inputNumber = document.getElementById('inputNumber').value
    if (remainingTime > 0) {
      const timer = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 1)
      }, 1000)

      return () => clearInterval(timer)
    // eslint-disable-next-line eqeqeq
    } else if (inputNumber > 0) {
      const inputNumber = document.getElementById('inputNumber').value
      const ResultNumberClicks = document.getElementById('ResultNumberClicks')
      const result = clickCount / inputNumber
      ResultNumberClicks.innerHTML = result
      console.log(`time intuted: ${timer}`)
      console.log(`resultado de los click count: ${result}`)
      setTimeout(() => {setClickCount(0)}, '500')
      //
    } else {
      return console.log('nada inputNumber')
      // Lógica para ejecutar tu función al finalizar el contador
      // Aquí puedes llamar a la función que deseas ejecutar

      // Mostrar el número de clicks realizados
    }
  }, [remainingTime])

  return (
    <div className={styles.GameClicker}>
      <h1>GameClicker</h1>
      <p id='ClickCountNumber'>You clicked {clickCount} times</p>
      <div className={styles.Clicker__bar} onClick={() => setClickCount(clickCount + 1)}>
          holaa
      </div>
      <div className={styles.setTimeGame}>
        <div className={styles.selectTime}>
            <input
              name="rangeInputSetSecond"
              id='inputNumber'
              type="range"
              min="10"
              max="40"
              step="10"
              ref={inputRef}
            />
          <button onClick={handleStart}>Start</button>

        </div>
        <h1>{remainingTime}</h1>
        <div onClick={handleClick}>Hacer clic aquí</div>
      </div>
    <Flex w='70%'>
      <NumberInput maxW='100px' mr='2rem' value={value} onChange={handleChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Slider
        step="10"
        color={'gray.500'}
        flex='1'
        min='10'
        focusThumbOnChange={false}
        value={value}
        onChange={handleChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb fontSize='sm' boxSize='32px' />
      </Slider>
    </Flex>
    <Box w={'100%'} h={'10rem'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <br />
      <Text as='b' fontSize='6xl'>
        <Text as='samp' fontSize='6xl' id='ResultNumberClicks' >o</Text>
      </Text>
      <br />
    </Box>
    </div>
  )
}
