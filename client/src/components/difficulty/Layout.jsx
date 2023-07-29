import styles from './Layout.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {paragraphActions} from "../../store/paraSlice";
import jsonData from '../paragraphs.json'
const Layout=({difficulty,color})=>{

    const dispatch=useDispatch();
    const handler=()=>{
        const paragraph=jsonData[difficulty.toLowerCase()]
        dispatch(paragraphActions.addPara({paragraph:paragraph}))
        localStorage.setItem("difficulty",difficulty.toLowerCase())
    }
    const mode=localStorage.getItem("mode")
    return(
        <NavLink onClick={handler} to={`/${localStorage.getItem("mode")}/${mode==="solo"?"type-racer":"lobby"}`} className={`${styles.box} ${styles[color]}`}>
            {difficulty}
        </NavLink>
    )
}

export default Layout;