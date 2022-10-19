import React, { useEffect, useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [time,setTime]=useState("")

  useEffect(()=>{
    setTimeout(()=>{
      var obj=new Date().toLocaleString();
      setTime(obj);
    },1000)
 
  },[time])
  return (
    <div id="main">
      <div className="date-time">
         {time}
      </div>
    </div>
  )
}


export default App;
