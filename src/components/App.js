import React, { useEffect, useState } from 'react'
import '../styles/App.css';
var timer=null;
const App = () => {
  const [time,setTime]=useState("")

  
   timer= setInterval(()=>{
      var obj=new Date().toLocaleString();
      setTime(obj);
      clearInterval(timer);
    },1000)

    
  
 

  
  return (
    <div id="main">
      <div className="date-time">
         {time}
      </div>
    </div>
  )
}


export default App;
