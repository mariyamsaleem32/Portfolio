import React, { useState,useEffect } from 'react';

const Time = () => {
const [date,setDate] = useState(0);

 useEffect(()=> {
   setInterval(()=>{
     const updatedDate = new Date();
     setDate(updatedDate.toLocaleTimeString())
   },1000)
  },[date])
  
    return (
        <div>
            <h1>Date is : {date}</h1>
        </div>
    );
}

export default Time;
