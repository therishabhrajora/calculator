import styles from '../modules/buttonContainer.module.css'
import Buttonitem from './button.jsx'

let ButtonConatiner = ({values}) => {
    
    return <div className={styles.buttonsContainer}>
        {values.map(button => (
            <Buttonitem key={button} buttons={button}></Buttonitem>
        ))}
    </div>
}

export default ButtonConatiner;