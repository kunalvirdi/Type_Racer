import {useSelector} from "react-redux";
import styles from './header.module.css'
const Header=()=>{
    const username=useSelector(state=>state.username.username)
    return(
        <div className={styles.div}>
            <h2 className={styles.h2}>Welcome kunal virdi</h2>
        </div>
    )
}
export default Header;