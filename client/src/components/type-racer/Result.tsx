import React, { memo } from "react";
import { ReloadIcon } from "./Icons";
import State from "./State";
import {NavLink} from "react-router-dom";
import styles from './result.module.css';
interface Props {
  completedText: string;
  inputText: string;
  errorIndex: number;
  accuracy: number;
  wpm: number;
  showStats: boolean;
  handleReload: () => void;
}

function Result({
  completedText = "",
  inputText = "",
  errorIndex = 0,
  accuracy = 0,
  wpm = 0,
  showStats = false,
  handleReload
}: Props) {
  const mode:string | null=localStorage.getItem("mode")
  localStorage.removeItem("difficulty")
  return (
    <>
      <div className='result'>
        <h6 className='mb-3'>Result</h6>
        <div className='row g-2 py-4'>
          <State title='WPM' value={wpm} />
          <State title='CPM' value={wpm * 5} />
          <State title='Errors' value={errorIndex} />
          <State title='Accuracy' value={accuracy} symbol='%' />
          <State
            title='Completed'
            value={((completedText.length / inputText.length) * 100).toFixed(0)}
            symbol='%'
          />
        </div>
      </div>
      {mode==="solo" &&<div className='reload pt-5'>
        <button
          type='button'
          disabled={!showStats}
          className='btn py-3 btn-success w-100 reload d-print-none'
          onClick={handleReload}
        >
          <ReloadIcon />
        </button>
      </div>}
      <NavLink className={styles.link} to='/'>Back to Home Screen</NavLink>
    </>
  );
}

export default memo(Result);
