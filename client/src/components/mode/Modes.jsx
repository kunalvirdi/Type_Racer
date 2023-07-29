import Layout from "./Layout";
import styles from './mode.module.css'
const Modes=()=>{
    return(
        <div className={styles.heading}>
            <h1>Choose mode you wanna play</h1>
            <div className={styles.grid}>
                <Layout mode='SOLO' color="blue"/>
                <Layout mode='MULTIPLAYER' color="orange"/>
            </div>
        </div>
    )
}

export default Modes;