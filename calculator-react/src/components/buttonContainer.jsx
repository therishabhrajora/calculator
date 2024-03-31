import styles from '../modules/buttonContainer.module.css'

let ButtonConatiner = ({onbuttonclick}) => {
    const buttons = ['C', '1', '2', '*', '3', '4', '/', '6', '7', '+', '8', '9', '0', '='];

    return <div className={styles.buttonsContainer}>
        {buttons.map((button) => (
            <button key={button }className={styles.button} onClick={()=>onbuttonclick(button)}>{button}</button>
        ))}
    </div>
}

export default ButtonConatiner;