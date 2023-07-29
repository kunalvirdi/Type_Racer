import {io} from 'socket.io-client'
import {useEffect, useState} from "react";
import styles from './element.module.css'
import {NavLink} from "react-router-dom";

const Lobby=()=>{
    const [users,setUsers]=useState([]);
    const socket=io('http://localhost:8000')
    useEffect(()=>{
        socket.emit(`join-${localStorage.getItem("difficulty")}-room`,{username:localStorage.getItem("username")})
        socket.on(`${localStorage.getItem("difficulty")}-room-joined`,data=>{
            if(data===' '){
                return;
            }
            setUsers(data)
        })
    },[])
    const handler=()=>{
        socket.emit(`${localStorage.getItem('difficulty')}-start`);
    }
    let element=[]
    users.forEach(data=>{
        element.push(data.username)
    })
    console.log(element)
    return(
        <div className={styles.div}>
            <h2 className={styles.heading}>{users.length} has {localStorage.getItem("difficulty")} Joined the Lobby</h2>
            {element.map((data,id)=>{
                return <span className={styles.span} key={id}>{data}</span>
            })}
            {users.length>=2 && <NavLink onClick={handler} to={'/multiplayer/type-racer'} className={styles.btn} >Start</NavLink>}
        </div>
    )
}

export default Lobby