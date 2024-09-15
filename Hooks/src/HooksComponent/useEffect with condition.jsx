import React from 'react'
import { useState, useEffect } from 'react';

function UseEffectwithcondition() {
    let [count,setcount]=useState(0)
    let [data,setdata]=useState(100)

    useEffect(()=>{
        alert("I'm update on Count")
    },[count])
    
  return (
    <div>
        <hr/>
        <b>Use Effect with condition</b>
      <h1>Count Update {count}</h1>
      <h1>Data Update {data}</h1>
      <button onClick={()=>{setcount(count+1)}}>Count Update</button>
      <button onClick={()=>{setdata(data+1)}}>Data Update</button>
      <hr/>
    </div>
  )
}

export default UseEffectwithcondition;