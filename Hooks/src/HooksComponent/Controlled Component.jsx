import React, {useState} from 'react'

function ControlledComponent() {
    let [val,setvalue]=useState("")
  return (
    <div>
        <hr/>
      <h1>Controlled Component</h1>
      <input onChange={(e)=>setvalue(e.target.value)}/><br/>
      <b>Value : {val}</b>
    </div>
  )
}

export default ControlledComponent
