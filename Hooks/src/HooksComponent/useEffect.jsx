import React,{useState, useEffect} from 'react'

function UseEffect() {
    let [data,setdata]=useState(0)
    useEffect(()=>{
        alert("I'm useEffect")
    })
  return (
    <div>
      <b>useEffect</b>
      <h1>useEffect Count {data}</h1>
      <button onClick={()=>setdata(data+1)}>Update</button>
    </div>
  )
}

export default UseEffect
