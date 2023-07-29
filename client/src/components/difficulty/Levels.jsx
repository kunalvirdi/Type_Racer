import Layout from "./Layout";
import styles from './levels.module.css'
const Levels=()=>{
    return(
        <div className={styles.heading}>
            <h1>Choose difficulty level</h1>
            <div className={styles.grid}>
                <Layout difficulty='EASY' color="blue"/>
                <Layout difficulty='MEDIUM' color="orange"/>
                <Layout difficulty='HARD' color="red"/>
            </div>
        </div>
    )
}

export default Levels;