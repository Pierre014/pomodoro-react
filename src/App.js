import React, {useState} from 'react';
import './App.css';

const App =()=>{
  let [minute,setMinute] = useState(1);
  let [second, setSecond] = useState(0);
  let [etat, setEtat] = useState(false);

  let minutes = minute;
  let seconds = second;
  let etats = etat;

  return (
    <div>
      <h1>POMODORO TIMER</h1>
      <p>time before end</p>
      <p>{minute} : {second}</p>


      <button onClick={()=>{
        if(!etat){
          minutes++;
          setMinute(minutes);
        }
      }}>+</button>

      <button id="start" onClick={()=>{

        //timer action
        if(minutes>0 && seconds>=0){
          etats = true;
          setEtat(etats);
          let interval = setInterval(() => {
          if(etats){
            if(seconds === 0){
              minutes--;
              seconds = 59;
            }
            seconds--;
            setSecond(seconds);
            setMinute(minutes);
            if(seconds===0 && minutes===0){
              clearInterval(interval);
            }
          }
          }, 1000);

          //pause timer
          let stop = document.getElementById('start');
          stop.innerHTML = "stop";
          stop.addEventListener('click',()=>{
            if(etats){
              etats = false;
              setEtat(etats);
              console.log(etat);
              stop.innerHTML = "start";
            }
          })
        }
      }}>start</button>

      <button onClick={()=>{
        if(!etat){
          minutes = 20;
          seconds = 0;
          setMinute(minutes);
          setSecond(seconds);
        }
      }}>reset</button>

      <button onClick={()=>{
        if(!etat && minutes!==0){
          minutes--;
          setMinute(minutes);
        }
      }}>-</button>
    </div>
  );
}

export default App;
