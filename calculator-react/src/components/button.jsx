import styles from '../modules/button.module.css'

let Buttonitem=({buttons})=>{
    return  <button className={styles.button}>{buttons}</button>
}

export default Buttonitem;