import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import Display from './components/display.jsx'
import ButtonContainer from './components/buttonContainer.jsx'
import Calculator from './components/brand.jsx'

function App() {
  const buttons = ['C', '1', '2', '*', '3', '4', '/', '6', '7', '+', '8', '9', '0', '='];
  return (
    <>
      <Calculator></Calculator>
      <div className={styles.calculator}>

        <Display></Display>
        <ButtonContainer values={buttons}></ButtonContainer>

      </div>
    </>
  )
}

export default App;
