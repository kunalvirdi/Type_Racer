import React from "react";
import {useState,useEffect} from "react";
import Home from "./components/Home/Home";
import './index.css'
import {useSelector} from "react-redux";
import {Routes, Route, Navigate} from "react-router-dom";
import Main from "./components/type-racer/Main";
import Header from './components/Header/Header'
import Mode from './components/mode/Modes'
import Levels from "./components/difficulty/Levels";
import Lobby from "./components/Lobby/Lobby";
import {io} from "socket.io-client";
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(initialValue));
    } catch (error) {
      currentValue = initialValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}



const defaultMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

function App() {

  const username=useSelector(state=>state.username.username)

  const [theme] = useLocalStorage("wpm-app-darkmode", defaultMode ? "dark" : "light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(()=>{
    console.log(username)
  },[username])
  localStorage.removeItem("difficulty")
  localStorage.removeItem("mode")
  return(
    <div>
      {username && <Header/>}
      <Routes>
        <Route path='/' element={!username?<Home/>:<Navigate to='/mode'/>}/>
        <Route path='/mode' element={!username? <Navigate to='/'/>:<Mode/>}/>
        <Route path='/solo/choose-difficulty' element={!username? <Navigate to='/'/>:<Levels/>}/>
        <Route path='/solo/type-racer' element={!username? <Navigate to='/'/>:<Main/>}/>
        <Route path='/multiplayer/choose-difficulty' element={<Levels/>}/>
        <Route path='/multiplayer/lobby' element={<Lobby/>}/>
        <Route path='/multiplayer/type-racer' element={!username? <Navigate to='/'/>:<Main />}/>
      </Routes>
    </div>
  )
}

export default App
