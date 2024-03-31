import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import Display from './components/display.jsx'
import ButtonContainer from './components/buttonContainer.jsx'
import Calculator from './components/brand.jsx'

function App() {

  let [calval, setcalval] = useState("");

  const onbuttonclick = (buttontext) => {
    if (buttontext === "C") {
      setcalval("");

    } else if (buttontext === "=") {
      const result=eval(calval);
      setcalval(result);
    } else {
      const newdisplayvalue = calval + buttontext;
      setcalval(newdisplayvalue);
    }
  };
  return (
    <>
      <Calculator></Calculator>
      <div className={styles.calculator}>
        <Display calval={calval}></Display>
        <ButtonContainer onbuttonclick={onbuttonclick}></ButtonContainer>
      </div>
    </>
  )
}

export default App;
