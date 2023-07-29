import React,{useRef} from 'react';

import styles from './home.module.css';

import {useDispatch} from "react-redux";
import {userActions} from "../../store/usersSlice";

function Home(){
    const dipatch=useDispatch();
  const username=useRef('')
  const formHandler=(e)=>{
    e.preventDefault();
    if(username.current.value==='') {
      window.alert("Invalid Username")
      return;
    }
    localStorage.setItem("username",username.current.value)
      dipatch(userActions.addUser({username:username.current.value}))
    username.current.value='';
  }
  return(
      <form className={styles.home} onSubmit={formHandler}>
        <input type="text" placeholder="Enter username" ref={username}/>
        <button className={styles.btn} type="submit">
          Click here to Enter the Game
        </button>
      </form>
  )
}

export default Home;
