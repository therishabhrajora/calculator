import styles from '../modules/display.module.css'

let Display=({calval})=>{
    return <input className={styles.display} type="text" value={calval} readOnly/>
}

export default Display;