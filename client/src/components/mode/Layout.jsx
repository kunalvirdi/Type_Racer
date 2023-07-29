import styles from './layout.module.css'
import {NavLink} from "react-router-dom";
const Layout=({mode,color})=>{
    const handler=()=>{
        localStorage.setItem("mode",mode.toLowerCase())
    }
    return(
        <NavLink onClick={handler} to={`/${mode.toLowerCase()}/choose-difficulty`} className={`${styles.box} ${styles[color]}`}>
            {mode}
        </NavLink>
    )
}

export default Layout;